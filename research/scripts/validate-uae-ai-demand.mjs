#!/usr/bin/env node

/**
 * Validate evidence-derived UAE AI consultancy seeds with DataForSEO.
 *
 * Sequence is deliberately constrained:
 *   1. Read the three qualitative/paid-demand evidence files and seed-set.json.
 *   2. Price every evidence-derived English and Arabic seed in UAE + Dubai.
 *   3. Expand only the explicitly listed roots derived from that seed set.
 *   4. Fetch keyword difficulty for relevant returned phrases.
 *   5. Inspect live mobile SERPs for a small, commercially weighted shortlist.
 *
 * No credentials are logged or copied. The source .env remains in the existing
 * passive-income pipeline. A hard $2 ceiling is enforced across API responses.
 */

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const PROJECT_DIR = resolve(SCRIPT_DIR, '../..');
const RAW_DIR = resolve(PROJECT_DIR, 'research/raw/2026-09-17-uae-ai-demand');
const OUT_FILE = resolve(RAW_DIR, 'dataforseo-demand.json');
const PIPELINE_ENV = '/Users/sid/Developer/Personal/passive income/pipeline/.env';
const COST_CEILING_USD = 2;
const priorCostArg = process.argv.find((arg) => arg.startsWith('--prior-cost='));
const PRIOR_RUN_COST_USD = priorCostArg ? Number(priorCostArg.slice('--prior-cost='.length)) : 0;
const SUPPLEMENT_SERPS = process.argv.includes('--supplement-serps');
if (!Number.isFinite(PRIOR_RUN_COST_USD) || PRIOR_RUN_COST_USD < 0 || PRIOR_RUN_COST_USD >= COST_CEILING_USD) {
  throw new Error(`Invalid --prior-cost value: ${priorCostArg ?? ''}`);
}

const INPUTS = {
  customerVoice: resolve(RAW_DIR, 'customer-voice.json'),
  paidDemand: resolve(RAW_DIR, 'paid-demand.json'),
  uaeOffers: resolve(RAW_DIR, 'uae-offers.json'),
  seedSet: resolve(RAW_DIR, 'seed-set.json'),
};

const readJson = (path) => JSON.parse(readFileSync(path, 'utf8'));
const source = Object.fromEntries(Object.entries(INPUTS).map(([key, path]) => [key, readJson(path)]));

const env = Object.fromEntries(
  readFileSync(PIPELINE_ENV, 'utf8')
    .split(/\r?\n/)
    .filter((line) => line.includes('=') && !line.trimStart().startsWith('#'))
    .map((line) => {
      const split = line.indexOf('=');
      return [line.slice(0, split).trim(), line.slice(split + 1).trim()];
    }),
);
const login = env.DATAFORSEO_LOGIN ?? env.DATAFORSEO_USERNAME;
const password = env.DATAFORSEO_PASSWORD;
if (!login || !password) throw new Error('DataForSEO credentials are missing from the existing pipeline .env');
const AUTH = `Basic ${Buffer.from(`${login}:${password}`).toString('base64')}`;

const GEOS = [
  { id: 'uae', label: 'United Arab Emirates', request: { location_code: 2784 } },
  { id: 'dubai', label: 'Dubai, Dubai, United Arab Emirates', request: { location_name: 'Dubai,Dubai,United Arab Emirates' } },
];
const LANGUAGES = [
  { id: 'en', code: 'en', name: 'English' },
  { id: 'ar', code: 'ar', name: 'Arabic' },
];

const clusters = new Map(source.seedSet.clusters.map((cluster) => [cluster.id, cluster]));
const seedRows = [];
for (const cluster of source.seedSet.clusters) {
  for (const keyword of cluster.english_seeds) seedRows.push({ keyword, language: 'en', cluster: cluster.id, evidence_strength: cluster.evidence_strength, source_signals: cluster.source_signals });
  for (const keyword of cluster.arabic_seeds) seedRows.push({ keyword, language: 'ar', cluster: cluster.id, evidence_strength: cluster.evidence_strength, source_signals: cluster.source_signals });
}
const uniqueSeeds = [...new Map(seedRows.map((row) => [`${row.language}:${row.keyword.toLocaleLowerCase()}`, row])).values()];

// These are not invented discovery terms: each root is a shorter form of the
// cited seed in `derived_from_seed`, retained only for narrow related-term expansion.
const EXPANSION_ROOTS = [
  { language: 'en', root: 'AI automation', derived_from_seed: 'AI automation services UAE', cluster: 'workflow_automation' },
  { language: 'en', root: 'WhatsApp automation', derived_from_seed: 'WhatsApp automation UAE', cluster: 'whatsapp_customer_service' },
  { language: 'en', root: 'AI document processing', derived_from_seed: 'AI document processing UAE', cluster: 'document_knowledge' },
  { language: 'en', root: 'AI consulting', derived_from_seed: 'AI consulting services UAE', cluster: 'readiness_governance' },
  { language: 'en', root: 'custom AI app development', derived_from_seed: 'custom AI app development Dubai', cluster: 'custom_ai_apps' },
  { language: 'en', root: 'AI voice agent', derived_from_seed: 'AI voice agent Dubai', cluster: 'voice_agents' },
  { language: 'en', root: 'CRM automation', derived_from_seed: 'CRM automation UAE', cluster: 'crm_erp_integrations' },
  { language: 'en', root: 'AI automation for real estate', derived_from_seed: 'AI automation for real estate Dubai', cluster: 'vertical_workflows' },
  { language: 'ar', root: 'أتمتة الأعمال بالذكاء الاصطناعي', derived_from_seed: 'أتمتة الأعمال بالذكاء الاصطناعي الإمارات', cluster: 'workflow_automation' },
  { language: 'ar', root: 'شات بوت واتساب', derived_from_seed: 'شات بوت واتساب دبي', cluster: 'whatsapp_customer_service' },
  { language: 'ar', root: 'تطوير تطبيقات الذكاء الاصطناعي', derived_from_seed: 'تطوير تطبيقات الذكاء الاصطناعي دبي', cluster: 'custom_ai_apps' },
  { language: 'ar', root: 'استشارات الذكاء الاصطناعي', derived_from_seed: 'استشارات الذكاء الاصطناعي دبي', cluster: 'readiness_governance' },
  { language: 'ar', root: 'معالجة المستندات بالذكاء الاصطناعي', derived_from_seed: 'معالجة المستندات بالذكاء الاصطناعي الإمارات', cluster: 'document_knowledge' },
];

const SERP_TARGETS = [
  { keyword: 'AI development company Dubai', language: 'en', geo: 'dubai', cluster: 'custom_ai_apps' },
  { keyword: 'WhatsApp automation', language: 'en', geo: 'uae', cluster: 'whatsapp_customer_service' },
  { keyword: 'AI automation', language: 'en', geo: 'uae', cluster: 'workflow_automation' },
  { keyword: 'CRM automation', language: 'en', geo: 'uae', cluster: 'crm_erp_integrations' },
  { keyword: 'AI voice agent', language: 'en', geo: 'uae', cluster: 'voice_agents' },
  { keyword: 'AI document processing', language: 'en', geo: 'uae', cluster: 'document_knowledge' },
  { keyword: 'AI automation for real estate', language: 'en', geo: 'uae', cluster: 'vertical_workflows' },
  { keyword: 'AI consulting', language: 'en', geo: 'uae', cluster: 'readiness_governance' },
  { keyword: 'شات بوت واتساب', language: 'ar', geo: 'uae', cluster: 'whatsapp_customer_service' },
  { keyword: 'استشارات الذكاء الاصطناعي', language: 'ar', geo: 'uae', cluster: 'readiness_governance' },
];

for (const root of EXPANSION_ROOTS) {
  const exists = uniqueSeeds.some((seed) => seed.language === root.language && seed.keyword === root.derived_from_seed);
  if (!exists) throw new Error(`Expansion root is not backed by seed-set.json: ${root.root}`);
}

const normalize = (value) => value.normalize('NFKC').toLocaleLowerCase().replace(/\s+/g, ' ').trim();
const strengthScore = (value) => value === 'high' ? 3 : value === 'medium_high' ? 2 : 1;
const commercialEnglish = /\b(company|consultant|consulting|services?|development|developer|integration|automation|solution|agency|implementation|assessment|audit|workshop|system|assistant|chatbot|agent|processing|crm|erp)\b/i;
const relevantEnglish = /\b(ai|artificial intelligence|automation|chatbot|whatsapp|voice agent|receptionist|document processing|invoice|ocr|rag|knowledge (assistant|base)|copilot|crm|erp|predictive maintenance|computer vision|machine learning)\b/i;
const junkEnglish = /\b(job|jobs|salary|course|courses|training course|certification|tutorial|free|meaning|definition|pdf download|resume|career)\b/i;
const commercialArabic = /(شركة|شركات|خدمات|خدمة|استشارات|استشارة|تطوير|حلول|أتمتة|تكامل|ربط|نظام|أنظمة|مساعد|روبوت|شات بوت|معالجة)/i;
const relevantArabic = /(ذكاء اصطناعي|الذكاء الاصطناعي|أتمتة|واتساب|روبوت|شات بوت|مستندات|فواتير|معرفة|صوتي|استقبال|إدارة علاقات العملاء)/i;
const junkArabic = /(وظائف|وظيفة|راتب|رواتب|دورة|دورات|تعلم|مجانا|مجاني)/i;

const output = {
  research_date: '2026-09-17',
  generated_at: new Date().toISOString(),
  scope: 'DataForSEO validation of evidence-derived UAE AI consultancy seeds; no unseeded discovery.',
  inputs: {
    files: INPUTS,
    evidence_counts: {
      customer_voice: source.customerVoice.evidence?.length ?? 0,
      paid_demand: source.paidDemand.records?.length ?? 0,
      uae_offers: source.uaeOffers.evidence?.length ?? 0,
      seed_clusters: source.seedSet.clusters?.length ?? 0,
      unique_english_seeds: uniqueSeeds.filter((row) => row.language === 'en').length,
      unique_arabic_seeds: uniqueSeeds.filter((row) => row.language === 'ar').length,
    },
  },
  method: {
    sequence: ['exact_seed_volume', 'evidence_root_expansion', 'keyword_difficulty', 'commercial_candidate_serps'],
    geographies: GEOS.map(({ id, label }) => ({ id, label })),
    languages: LANGUAGES,
    expansion_roots: EXPANSION_ROOTS,
    decision_policy: 'Volume is validation, not a page recommendation. Candidate order also retains qualitative evidence strength, paid-work proximity, CPC, keyword difficulty and live SERP ownership/features.',
  },
  cost: { currency: 'USD', hard_ceiling: COST_CEILING_USD, prior_run_cost: PRIOR_RUN_COST_USD, actual: PRIOR_RUN_COST_USD, calls: PRIOR_RUN_COST_USD ? [{ label: 'prior validation run', endpoint: null, status_code: 20000, cost: PRIOR_RUN_COST_USD, cumulative_cost: PRIOR_RUN_COST_USD }] : [] },
  exact_seed_volume: {},
  expansion: {},
  keyword_difficulty: {},
  serp_inspection: [],
  zero_volume: [],
  missing_volume: [],
  errors: [],
  caveats: [
    'Google Ads volumes are rounded estimates and low-volume B2B terms are frequently grouped or returned as zero.',
    'Dubai is a city-level location while UAE is country-level; the two are not additive.',
    'Arabic spelling variants may be grouped inconsistently by Google Ads.',
    'SERP results are an API snapshot, not a signed-in manual browser capture; ads, map packs and AI Overviews can vary by device, time and exact user location.',
    'A zero or missing keyword is preserved as evidence of limited measurable search demand, not proof that buyers never use the language in referrals, procurement or private conversations.',
  ],
};

let totalCost = PRIOR_RUN_COST_USD;
const RESERVE = {
  'keywords_data/google_ads/search_volume/live': 0.1,
  'keywords_data/google_ads/keywords_for_keywords/live': 0.1,
  'dataforseo_labs/google/bulk_keyword_difficulty/live': 0.02,
  'serp/google/organic/live/advanced': 0.01,
};

async function dfs(path, body, label) {
  const reserve = RESERVE[path] ?? 0.1;
  if (totalCost + reserve > COST_CEILING_USD) {
    const message = `Skipped ${label}: pre-call reserve would cross $${COST_CEILING_USD.toFixed(2)} ceiling`;
    output.errors.push({ stage: label, error: message });
    console.error(message);
    return null;
  }
  const response = await fetch(`https://api.dataforseo.com/v3/${path}`, {
    method: 'POST',
    headers: { Authorization: AUTH, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const json = await response.json();
  const callCost = Number(json.cost ?? (json.tasks ?? []).reduce((sum, task) => sum + Number(task.cost ?? 0), 0));
  totalCost += callCost;
  output.cost.actual = Number(totalCost.toFixed(6));
  const task = json.tasks?.[0];
  output.cost.calls.push({ label, endpoint: path, status_code: task?.status_code ?? json.status_code, cost: callCost, cumulative_cost: output.cost.actual });
  console.log(`${label}: $${callCost.toFixed(4)} (cumulative $${totalCost.toFixed(4)})`);
  if (totalCost > COST_CEILING_USD) throw new Error(`Hard API-cost ceiling exceeded: $${totalCost.toFixed(6)}`);
  if (!response.ok || json.status_code !== 20000 || task?.status_code !== 20000) {
    output.errors.push({ stage: label, status_code: task?.status_code ?? json.status_code, error: task?.status_message ?? json.status_message ?? `HTTP ${response.status}` });
    return null;
  }
  return task.result;
}

const metric = (row) => ({
  keyword: row.keyword,
  search_volume: row.search_volume ?? null,
  cpc_usd: row.cpc ?? null,
  competition_index: row.competition_index ?? null,
  competition_level: row.competition ?? row.competition_level ?? null,
  low_top_of_page_bid_usd: row.low_top_of_page_bid ?? null,
  high_top_of_page_bid_usd: row.high_top_of_page_bid ?? null,
  monthly_searches: row.monthly_searches ?? [],
});

const parseSerp = (items) => {
  const paid = items.filter((item) => ['paid', 'ads_top', 'ads_bottom'].includes(item.type));
  const packs = items.filter((item) => ['local_pack', 'maps_search', 'map'].includes(item.type));
  const aio = items.find((item) => item.type === 'ai_overview');
  return {
    item_types: [...new Set(items.map((item) => item.type))],
    ads: { present: paid.length > 0, count: paid.length, results: paid.map((item) => ({ domain: item.domain ?? null, title: item.title ?? null, url: item.url ?? null })) },
    map_pack: { present: packs.length > 0, count: packs.length, results: packs.flatMap((pack) => pack.items ?? [pack]).slice(0, 5).map((item) => ({ title: item.title ?? null, domain: item.domain ?? null, rating: item.rating?.value ?? item.rating ?? null, reviews: item.rating?.votes_count ?? item.reviews_count ?? null })) },
    ai_overview: { present: Boolean(aio), references: [...new Set([...(aio?.references ?? []), ...((aio?.items ?? []).flatMap((item) => item.references ?? []))].map((ref) => ref.domain ?? ref.url).filter(Boolean))] },
    organic: items.filter((item) => item.type === 'organic').slice(0, 10).map((item) => ({ rank: item.rank_absolute ?? item.rank_group ?? null, domain: item.domain ?? null, title: item.title ?? null, url: item.url ?? null })),
  };
};

// A bounded recovery mode can add missing target SERPs without repeating paid
// volume/expansion calls. It is also useful if one live SERP task fails transiently.
if (SUPPLEMENT_SERPS) {
  const existing = readJson(OUT_FILE);
  const currentKeys = new Set(existing.serp_inspection.map((row) => `${row.language}:${row.geo}:${normalize(row.keyword)}`));
  const targets = SERP_TARGETS.filter((row) => !currentKeys.has(`${row.language}:${row.geo}:${normalize(row.keyword)}`));
  const added = [];
  for (const target of targets) {
    const language = LANGUAGES.find((item) => item.id === target.language);
    const geo = GEOS.find((item) => item.id === target.geo);
    const exact = existing.exact_seed_volume?.[`${target.geo}_${target.language}`]?.find((row) => normalize(row.keyword) === normalize(target.keyword));
    const expanded = existing.expansion?.[`${target.geo}_${target.language}`]?.relevant_results?.find((row) => normalize(row.keyword) === normalize(target.keyword));
    const candidate = existing.ranked_commercial_candidates?.find((row) => row.language === target.language && row.geo === target.geo && normalize(row.keyword) === normalize(target.keyword));
    const metrics = candidate ?? exact ?? expanded ?? {};
    const result = await dfs('serp/google/organic/live/advanced', [{ keyword: target.keyword, ...geo.request, language_code: language.code, device: 'mobile', depth: 20 }], `supplemental SERP ${target.geo}/${target.language}: ${target.keyword}`);
    const root = result?.[0];
    added.push({ ...target, origin: metrics.origin ?? (exact ? 'exact_seed' : 'evidence_root_expansion'), evidence_strength: clusters.get(target.cluster)?.evidence_strength ?? null, source_signals: clusters.get(target.cluster)?.source_signals ?? [], search_volume: metrics.search_volume ?? null, cpc_usd: metrics.cpc_usd ?? null, competition_index: metrics.competition_index ?? null, keyword_difficulty: metrics.keyword_difficulty ?? null, validation_score: metrics.validation_score ?? null, paid_demand_signal_count: metrics.paid_demand_signal_count ?? null, check_url: root?.check_url ?? null, ...(root ? parseSerp(root.items ?? []) : { error: 'No SERP result returned' }) });
  }
  existing.serp_inspection = [...existing.serp_inspection, ...added];
  existing.cost.prior_run_cost = PRIOR_RUN_COST_USD;
  existing.cost.actual = Number(totalCost.toFixed(6));
  existing.cost.within_ceiling = totalCost <= COST_CEILING_USD;
  existing.cost.calls = [...existing.cost.calls, ...output.cost.calls.filter((call) => call.endpoint)];
  existing.supplemental_serp_run = { added: added.length, completed_at: new Date().toISOString() };
  existing.completed_at = new Date().toISOString();
  writeFileSync(OUT_FILE, `${JSON.stringify(existing, null, 2)}\n`);
  console.log(`Supplemented ${added.length} SERPs. DataForSEO cumulative task cost: $${totalCost.toFixed(4)} / $${COST_CEILING_USD.toFixed(2)} ceiling.`);
  process.exit(0);
}

// 1. Exact evidence-derived seed volumes for both languages and both geographies.
for (const language of LANGUAGES) {
  const languageSeeds = uniqueSeeds.filter((row) => row.language === language.id);
  for (const geo of GEOS) {
    const key = `${geo.id}_${language.id}`;
    const result = await dfs('keywords_data/google_ads/search_volume/live', [{
      keywords: languageSeeds.map((row) => row.keyword),
      ...geo.request,
      language_code: language.code,
    }], `exact volume ${geo.id}/${language.id}`);
    const returned = (result ?? []).map(metric);
    const byKeyword = new Map(returned.map((row) => [normalize(row.keyword), row]));
    const rows = languageSeeds.map((seed) => {
      const found = byKeyword.get(normalize(seed.keyword));
      const status = !found || found.search_volume === null ? 'missing' : found.search_volume === 0 ? 'zero' : 'positive';
      const row = { ...seed, geo: geo.id, status, ...(found ?? { search_volume: null, cpc_usd: null, competition_index: null, competition_level: null, low_top_of_page_bid_usd: null, high_top_of_page_bid_usd: null, monthly_searches: [] }) };
      if (status === 'zero') output.zero_volume.push({ stage: 'exact_seed', geo: geo.id, language: language.id, keyword: seed.keyword, cluster: seed.cluster });
      if (status === 'missing') output.missing_volume.push({ stage: 'exact_seed', geo: geo.id, language: language.id, keyword: seed.keyword, cluster: seed.cluster });
      return row;
    });
    output.exact_seed_volume[key] = rows;
  }
}

// 2. Narrow expansion from evidence-backed roots only.
for (const language of LANGUAGES) {
  const roots = EXPANSION_ROOTS.filter((root) => root.language === language.id);
  for (const geo of GEOS) {
    const key = `${geo.id}_${language.id}`;
    const result = await dfs('keywords_data/google_ads/keywords_for_keywords/live', [{
      keywords: roots.map((root) => root.root),
      ...geo.request,
      language_code: language.code,
      sort_by: 'search_volume',
    }], `root expansion ${geo.id}/${language.id}`);
    const raw = (result ?? []).map(metric);
    const relevant = raw.filter((row) => {
      const keyword = row.keyword ?? '';
      return language.id === 'en'
        ? relevantEnglish.test(keyword) && commercialEnglish.test(keyword) && !junkEnglish.test(keyword)
        : relevantArabic.test(keyword) && commercialArabic.test(keyword) && !junkArabic.test(keyword);
    });
    output.expansion[key] = {
      roots,
      raw_count: raw.length,
      relevant_count: relevant.length,
      raw_results: raw,
      relevant_results: relevant,
    };
    for (const row of relevant) {
      if (row.search_volume === 0) output.zero_volume.push({ stage: 'expansion', geo: geo.id, language: language.id, keyword: row.keyword });
      if (row.search_volume === null) output.missing_volume.push({ stage: 'expansion', geo: geo.id, language: language.id, keyword: row.keyword });
    }
  }
}

// Candidate pool: exact seeds plus relevant expansions, with evidence cluster retained.
const candidates = new Map();
for (const language of LANGUAGES) {
  for (const geo of GEOS) {
    const key = `${geo.id}_${language.id}`;
    for (const row of output.exact_seed_volume[key] ?? []) {
      const id = `${language.id}:${geo.id}:${normalize(row.keyword)}`;
      candidates.set(id, { ...row, origin: 'exact_seed', commercial: language.id === 'en' ? commercialEnglish.test(row.keyword) : commercialArabic.test(row.keyword) });
    }
    for (const row of output.expansion[key]?.relevant_results ?? []) {
      const id = `${language.id}:${geo.id}:${normalize(row.keyword)}`;
      if (!candidates.has(id)) {
        const matchingRoot = EXPANSION_ROOTS.find((root) => root.language === language.id && normalize(row.keyword).includes(normalize(root.root)));
        candidates.set(id, { ...row, language: language.id, geo: geo.id, cluster: matchingRoot?.cluster ?? 'evidence_root_expansion', evidence_strength: clusters.get(matchingRoot?.cluster)?.evidence_strength ?? 'medium', source_signals: clusters.get(matchingRoot?.cluster)?.source_signals ?? [], origin: 'evidence_root_expansion', commercial: true });
      }
    }
  }
}

// 3. Keyword difficulty. Labs accepts country-level locations, so UAE KD is
// applied to both the UAE and Dubai volume views rather than making invalid city calls.
for (const language of LANGUAGES) {
  const rows = [...candidates.values()]
    .filter((row) => row.language === language.id && (row.search_volume ?? 0) > 0)
    .sort((a, b) => (b.search_volume ?? 0) - (a.search_volume ?? 0));
  const keywords = [...new Set(rows.map((row) => row.keyword))].slice(0, 300);
  const key = `uae_${language.id}`;
  if (!keywords.length) {
    output.keyword_difficulty[key] = { requested: [], results: [], missing: [], applies_to: ['uae', 'dubai'] };
    continue;
  }
  const result = await dfs('dataforseo_labs/google/bulk_keyword_difficulty/live', [{
    keywords,
    location_code: 2784,
    language_code: language.code,
  }], `keyword difficulty uae/${language.id}`);
  const items = result?.[0]?.items ?? [];
  const kdMap = new Map(items.map((item) => [normalize(item.keyword), item.keyword_difficulty ?? null]));
  output.keyword_difficulty[key] = {
    requested: keywords,
    results: keywords.filter((keyword) => kdMap.has(normalize(keyword))).map((keyword) => ({ keyword, keyword_difficulty: kdMap.get(normalize(keyword)) })),
    missing: keywords.filter((keyword) => !kdMap.has(normalize(keyword))),
    applies_to: ['uae', 'dubai'],
    note: 'Country-level UAE difficulty is reused for the Dubai volume view because the Labs endpoint rejects city locations.',
  };
  for (const row of rows) row.keyword_difficulty = kdMap.get(normalize(row.keyword)) ?? null;
}

const paidDemandIds = new Set(source.paidDemand.records.map((row) => row.id));
const directPaidSignals = (signals) => signals?.filter((id) => paidDemandIds.has(id)).length ?? 0;
const scored = [...candidates.values()].filter((row) => row.commercial && (row.search_volume ?? 0) > 0).map((row) => {
  const evidence = strengthScore(row.evidence_strength);
  const paid = directPaidSignals(row.source_signals);
  const cpc = row.cpc_usd ?? 0;
  const kd = row.keyword_difficulty;
  const volume = row.search_volume ?? 0;
  const score = evidence * 30 + Math.min(30, Math.log10(volume + 1) * 12) + Math.min(20, cpc * 2) + paid * 8 + (kd === null ? 0 : Math.max(0, 20 - kd) / 4);
  return { ...row, paid_demand_signal_count: paid, validation_score: Number(score.toFixed(2)) };
}).sort((a, b) => b.validation_score - a.validation_score || (b.search_volume ?? 0) - (a.search_volume ?? 0));

// Fixed, evidence-backed commercial targets prevent volume from choosing the
// site architecture. Each cluster receives one SERP; no discovery term is added.
const serpCandidates = SERP_TARGETS.map((target) => {
  const exact = [...candidates.values()].find((row) => row.language === target.language && row.geo === target.geo && normalize(row.keyword) === normalize(target.keyword));
  return exact ? { ...exact, paid_demand_signal_count: directPaidSignals(exact.source_signals), validation_score: scored.find((row) => row.language === target.language && row.geo === target.geo && normalize(row.keyword) === normalize(target.keyword))?.validation_score ?? null } : { ...target, origin: 'evidence_root', evidence_strength: clusters.get(target.cluster)?.evidence_strength ?? null, source_signals: clusters.get(target.cluster)?.source_signals ?? [], search_volume: null, cpc_usd: null, competition_index: null, keyword_difficulty: null, paid_demand_signal_count: directPaidSignals(clusters.get(target.cluster)?.source_signals), validation_score: null };
});

// 4. Live SERPs for the commercially weighted shortlist only.
for (const candidate of serpCandidates) {
  const language = LANGUAGES.find((item) => item.id === candidate.language);
  const geo = GEOS.find((item) => item.id === candidate.geo);
  const result = await dfs('serp/google/organic/live/advanced', [{
    keyword: candidate.keyword,
    ...geo.request,
    language_code: language.code,
    device: 'mobile',
    depth: 20,
  }], `SERP ${candidate.geo}/${candidate.language}: ${candidate.keyword}`);
  const root = result?.[0];
  output.serp_inspection.push({
    keyword: candidate.keyword,
    language: candidate.language,
    geo: candidate.geo,
    cluster: candidate.cluster,
    origin: candidate.origin,
    evidence_strength: candidate.evidence_strength,
    source_signals: candidate.source_signals,
    search_volume: candidate.search_volume,
    cpc_usd: candidate.cpc_usd,
    competition_index: candidate.competition_index,
    keyword_difficulty: candidate.keyword_difficulty ?? null,
    validation_score: candidate.validation_score,
    paid_demand_signal_count: candidate.paid_demand_signal_count,
    check_url: root?.check_url ?? null,
    ...(root ? parseSerp(root.items ?? []) : { error: 'No SERP result returned' }),
  });
}

output.ranked_commercial_candidates = scored.slice(0, 40).map((row) => ({
  keyword: row.keyword,
  language: row.language,
  geo: row.geo,
  cluster: row.cluster,
  origin: row.origin,
  evidence_strength: row.evidence_strength,
  source_signals: row.source_signals,
  paid_demand_signal_count: row.paid_demand_signal_count,
  search_volume: row.search_volume,
  cpc_usd: row.cpc_usd,
  competition_index: row.competition_index,
  keyword_difficulty: row.keyword_difficulty ?? null,
  validation_score: row.validation_score,
  warning: 'Candidate for further review, not an automatic page recommendation.',
}));

output.cost.actual = Number(totalCost.toFixed(6));
output.cost.within_ceiling = totalCost <= COST_CEILING_USD;
output.completed_at = new Date().toISOString();
mkdirSync(dirname(OUT_FILE), { recursive: true });
writeFileSync(OUT_FILE, `${JSON.stringify(output, null, 2)}\n`);

const positiveExact = Object.values(output.exact_seed_volume).flat().filter((row) => row.status === 'positive');
console.log(`\nValidated ${uniqueSeeds.filter((row) => row.language === 'en').length} English and ${uniqueSeeds.filter((row) => row.language === 'ar').length} Arabic unique evidence-derived seeds across UAE and Dubai.`);
console.log(`Exact seed observations: ${positiveExact.length} positive, ${output.zero_volume.filter((row) => row.stage === 'exact_seed').length} zero, ${output.missing_volume.filter((row) => row.stage === 'exact_seed').length} missing.`);
console.log(`SERPs inspected: ${output.serp_inspection.length}.`);
console.log(`DataForSEO cumulative task cost: $${totalCost.toFixed(4)} / $${COST_CEILING_USD.toFixed(2)} ceiling.`);
console.log(`Output: ${OUT_FILE}`);

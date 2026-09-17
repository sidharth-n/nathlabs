# Natha Labs: State

_Last updated: 2026-09-17_

## Now

The redesigned company website is live at https://www.nathalabs.com. Branch: main. Sid approved publishing with the existing logo and ending this session. Next session is exclusively Stripe activation for Natha Labs and deciding the account structure for future micro-SaaS products.

## Next

1. Resume here, read this handoff and inspect the current Stripe Dashboard with Sid. Do not restart the website or logo work.
2. Obtain the missing colour passport photo-page scan and bank-issued statement or account-confirmation letter dated within six months. Use an unlocked PDF, not a banking-app screenshot. Keep identity and bank files outside Git.
3. Confirm Aman is the authorized representative, residential address, working support email/phone, legal business details, expected payments/customer countries, and applicable tax registration. Confirm all published business claims, including combined experience, against the actual team.
4. Complete the UAE account application using the licensed business and actual activities. Sid and Aman must supply any required identity/account verification. No application has been submitted yet.
5. Decide how future apps relate to the company. Independently operated projects require separate Stripe accounts; multiple accounts can share one legal entity and be managed together. Do not promise one unrestricted account for every future app. Use current official Stripe integration guidance when coding each product.

## Blockers

- Passport scan and recent bank evidence are not in the known document packet.
- Stripe Dashboard status/access and representative details must be confirmed next session. Approval is not yet obtained.
- Search Console ownership, sitemap submission and live indexing remain unverified; separate follow-up, not a blocker to starting Stripe onboarding.

## Latest handoff: 2026-09-17

### Shipped and verified

Ten commercial pages (home plus nine services), four policy pages, responsive design, clear customer copy, static HTML, unique metadata, JSON-LD, sitemap, complete icon set, local fonts and Vercel Analytics. Existing black/orange N logo retained; four design explorations remain parked in design/logo-options/. Internal research is absent from sales copy.

PR https://github.com/sidharth-n/nathlabs/pull/1 merged. Release commit: 1f2c259, with canonical fix 104b035. Production project: nathlabs, team sidharthns-projects. Deployment: https://nathlabs-mi3oq7k0t-sidharthns-projects.vercel.app (dpl_CE8VTFATXzaWEQXMmqdhUGaaZLnS). Both domain aliases work; apex redirects to www. Preserve www as primary; all canonical, social, schema and sitemap URLs match it. Prior production deployment for rollback reference: dpl_tuwkJoKFFiCmpCxzFM6HRtWzd6xN.

Production build, TypeScript, ESLint and whitespace checks passed. `PREVIEW_URL=https://www.nathalabs.com npm run verify` passed all 14 routes, complete HTML, unique titles, canonical/social URLs, JSON-LD, internal links, sitemap, icons/font content types and genuine HTTP 404. Browser inspected all 14 routes at 1440px and 390px: no horizontal overflow. Menu opening and Escape passed, no console errors. Screenshots were visually inspected, and Safari opened the live site. One immediate image check ran before the WhatsApp page logos loaded; a network-idle recheck confirmed successful loading. Browser log: docs/production-browser-check-2026-09-17.txt. Earlier local checks also covered FAQ/workflow interactions and 320px/768px layouts.

### Company records and Stripe

Known company packet: `/Users/sid/Downloads/company files aman ` (the directory name has a trailing space). It contains the trade licence, MOA, Emirates ID and establishment card. Earlier record review found a Dubai single-owner LLC, Aman as sole owner/manager, an IT consulting activity, and licence expiry 15 July 2027. Recheck originals during the application. Never commit the raw documents or identity/bank numbers.

Public business: natha lab For Information Technology Consultants L.L.C S.O.C.; licence 1529656. Website contact: contact@nathalabs.com, +971522628164. Office 06, T-SH-D-16, Dubai Industrial City, Saih Shuaib 3, Dubai, UAE. Verify operating contact channels before submission.

Official sources checked 2026-09-17:
- https://support.stripe.com/questions/uae-business-verification-requirements?locale=en-GB
- https://support.stripe.com/questions/uae-account-activation-requirements?locale=en-GB
- https://support.stripe.com/questions/uae-ownership-verification-requirements?locale=en-GB
- https://support.stripe.com/questions/troubleshooting-uae-verification-issues
- https://docs.stripe.com/get-started/account/multiple-accounts

For a single-member LLC, Stripe describes owner or business bank evidence, subject to verification and matching ownership. Passport and Emirates ID are part of the identity requirements; Emirates ID can replace residency-visa evidence for visas issued after 11 April 2022. Use the actual Dashboard requests as the application checklist. Website readiness is not account activation.

### Resume commands

`npm run build`, `npm run preview` (127.0.0.1:4173), `npm run verify`, `npm run typecheck`, `npm run lint`. Live checks use `PREVIEW_URL=https://www.nathalabs.com npm run verify`. Vercel is linked locally through ignored .vercel/. Research, design and session notes are excluded from CLI source uploads via .vercelignore.

### Session preferences

Open finished websites/deliverables in Safari automatically. Brief progress report after each major step. No double hyphens or em dashes as prose punctuation. Keep customer copy plain and specific; research informs services but never appears as internal metrics on sales pages. Keep existing branding while working toward payments activation.

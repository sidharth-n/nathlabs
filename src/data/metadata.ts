import { servicePageMap } from "./servicePages";

export const siteUrl = "https://nathalabs.com";
const policies: Record<string, [string, string]> = {
  "/privacy": [
    "Privacy Policy",
    "How Natha Labs handles personal information, business enquiries, analytics and customer data.",
  ],
  "/terms": [
    "Terms of Service",
    "Terms for Natha Labs consulting, custom software development and digital services.",
  ],
  "/refunds": [
    "Refund and Cancellation Policy",
    "Payment, cancellation and refund terms for Natha Labs projects and software subscriptions.",
  ],
  "/delivery": [
    "Service Delivery Policy",
    "How Natha Labs delivers consulting, software projects, support and digital products.",
  ],
};

export function getMetadata(path: string) {
  const service = servicePageMap.get(path);
  const policy = policies[path];
  const found = path === "/" || !!service || !!policy;
  return {
    title:
      service?.metaTitle ??
      (policy
        ? `${policy[0]} | Natha Labs`
        : path === "/"
          ? "AI Consulting & Automation in Dubai | Natha Labs"
          : "Page not found | Natha Labs"),
    description:
      service?.metaDescription ??
      policy?.[1] ??
      "AI consulting, custom AI apps and business automation in Dubai and the UAE. Connect your enquiries, documents and daily work to the systems you use.",
    canonical: `${siteUrl}${path === "/" ? "/" : path}`,
    robots: found
      ? "index, follow, max-image-preview:large"
      : "noindex, follow",
  };
}

export function applyMetadata(meta: ReturnType<typeof getMetadata>) {
  document.title = meta.title;
  const values: Record<string, string> = {
    'meta[name="description"]': meta.description,
    'meta[property="og:title"]': meta.title,
    'meta[property="og:description"]': meta.description,
    'meta[property="og:url"]': meta.canonical,
    'meta[name="twitter:title"]': meta.title,
    'meta[name="twitter:description"]': meta.description,
    'meta[name="robots"]': meta.robots,
  };
  Object.entries(values).forEach(([selector, value]) =>
    document.querySelector(selector)?.setAttribute("content", value),
  );
  document
    .querySelector('link[rel="canonical"]')
    ?.setAttribute("href", meta.canonical);
}

export function whatsappUrl(subject = "an AI project") {
  return `https://wa.me/971522628164?text=${encodeURIComponent(`Hello Natha Labs, I would like to discuss ${subject}.`)}`;
}

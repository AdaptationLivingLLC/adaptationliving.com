import type { MetadataRoute } from "next";

const baseUrl = "https://www.adaptationliving.com";

const pages = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/ai", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/features", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/demo", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/intake", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/showcase", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/legal", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/vs", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/vs/activecampaign", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/vs/hubspot", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/vs/clickfunnels", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/vs/keap", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/vs/linktree", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/vs/kartra", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/vs/vendasta", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/vs/sharpspring", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/vs/klaviyo", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/vs/zoho", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/vs/salesforce", priority: 0.75, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    const clean = page.path === "/" ? "" : page.path;

    entries.push({
      url: `${baseUrl}${clean}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${clean}`,
          es: `${baseUrl}/es${clean}`,
          "x-default": `${baseUrl}${clean}`,
        },
      },
    });

    entries.push({
      url: `${baseUrl}/es${clean}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${clean}`,
          es: `${baseUrl}/es${clean}`,
          "x-default": `${baseUrl}${clean}`,
        },
      },
    });
  }

  return entries;
}

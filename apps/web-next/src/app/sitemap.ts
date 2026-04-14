import type { MetadataRoute } from "next";

const baseUrl = "https://adaptationliving.com";

const pages = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/ai", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/intake", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/legal", priority: 0.2, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    const clean = page.path === "/" ? "" : page.path;

    // English (default) version
    entries.push({
      url: `${baseUrl}${clean}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${clean}`,
          es: `${baseUrl}/es${clean}`,
        },
      },
    });

    // Spanish version
    entries.push({
      url: `${baseUrl}/es${clean}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${clean}`,
          es: `${baseUrl}/es${clean}`,
        },
      },
    });
  }

  return entries;
}

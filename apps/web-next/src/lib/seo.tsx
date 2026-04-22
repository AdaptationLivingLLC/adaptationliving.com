// Shared SEO utilities for consistent structured data across pages

const baseUrl = "https://www.adaptationliving.com";

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${baseUrl}${item.path}`,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
    />
  );
}

export function pageAlternates(path: string) {
  const clean = path === "/" ? "" : path;
  return {
    canonical: `${baseUrl}${clean}`,
    languages: {
      en: `${baseUrl}${clean}`,
      es: `${baseUrl}/es${clean}`,
      "x-default": `${baseUrl}${clean}`,
    },
  };
}

export function pageOg(title: string, description: string, path: string) {
  return {
    type: "website" as const,
    siteName: "Adaptation Living LLC",
    locale: "en_US",
    title,
    description,
    url: `${baseUrl}${path}`,
    images: [
      {
        url: `${baseUrl}/images/og-share-2026.png`,
        width: 1200,
        height: 630,
        alt: "Adaptation Living — Award-Winning AI Automation & CRM Platform (G2 Top 50, Capterra Shortlist 2026)",
      },
    ],
  };
}

export function pageTwitter(title: string, description: string) {
  return {
    card: "summary_large_image" as const,
    title,
    description,
    images: [`${baseUrl}/images/og-share-2026.png`],
  };
}

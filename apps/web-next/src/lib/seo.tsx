// Shared SEO utilities for consistent structured data across pages

const baseUrl = "https://adaptationliving.com";

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
    title,
    description,
    url: `${baseUrl}${path}`,
    images: [
      {
        url: `${baseUrl}/images/banner.svg`,
        width: 1200,
        height: 630,
        alt: "Adaptation Living LLC — AI Automation and Web Development Studio in Phoenix AZ",
      },
    ],
  };
}

export function pageTwitter(title: string, description: string) {
  return {
    card: "summary_large_image" as const,
    title,
    description,
    images: [`${baseUrl}/images/banner.svg`],
  };
}

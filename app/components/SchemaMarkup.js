const SITE_URL = "https://mehndi-design.net";
const SOCIAL_PROFILES = [
  "https://www.pinterest.com/mehndidesign0719/",
  "https://x.com/MehndiDesigv",
  "https://www.facebook.com/profile.php?id=61590777834598",
  "https://www.instagram.com/mehndidesign0719/",
];

function JsonLd({ schema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  return (
    <JsonLd
      schema={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Mehndi Design",
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/logo.webp`,
        email: "mehndidesign0719@gmail.com",
        sameAs: SOCIAL_PROFILES,
      }}
    />
  );
}

export function WebSiteSchema() {
  return (
    <JsonLd
      schema={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Mehndi Design",
        url: `${SITE_URL}/`,
        description:
          "Explore 1500+ beautiful mehndi and henna designs for every occasion.",
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/search/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      }}
    />
  );
}

export function GallerySchema({ title, description, url, images }) {
  return (
    <JsonLd
      schema={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: title,
        description,
        url,
        image: images.slice(0, 10).map((img) => ({
          "@type": "ImageObject",
          contentUrl: `${SITE_URL}${img.src}`,
          name: img.alt,
          description: img.title,
        })),
      }}
    />
  );
}

export function BreadcrumbSchema({ items }) {
  return (
    <JsonLd
      schema={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}

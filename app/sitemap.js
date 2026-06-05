import { getAllSlugs } from "./data/siteData.js";

export const dynamic = "force-static";

const BASE_URL = "https://mehndi-design.net";
const urlFor = (path = "") => `${BASE_URL}${path}/`;

export default function sitemap() {
  const staticPages = [
    {
      url: urlFor(),
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: urlFor("/best-mehndi-designs"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: urlFor("/latest-mehndi-designs"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: urlFor("/mehndi-design-categories"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // All category and subcategory slugs
  const slugs = getAllSlugs();
  const dynamicPages = slugs.map((slug) => ({
    url: urlFor(`/${slug}`),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...dynamicPages];
}

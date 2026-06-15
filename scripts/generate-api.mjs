/**
 * generate-api.mjs
 * Generates a static /public/api/data.json containing the full category tree
 * with real image URLs. This file is served as a static asset and consumed
 * by the Flutter mobile app.
 *
 * Run: node scripts/generate-api.mjs
 * Hook: Add to package.json "prebuild" so it runs before every `next build`.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const APP_DATA = path.join(ROOT, "app", "data");

// ─── Site Config ────────────────────────────────────────────────
const SITE_URL = "https://mehndi-design.net";

// ─── Image scanner ──────────────────────────────────────────────
function buildImageText(file, publicPath) {
  const fileName = path.parse(file).name;
  const folderName = publicPath
    .split("/")
    .filter(Boolean)
    .pop()
    ?.replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const base = fileName.toLowerCase().includes("mehndi")
    ? fileName
    : `${fileName} ${folderName || "Mehndi Design"} Mehndi Design`;

  return base.replace(/\s+/g, " ").trim();
}

function normalizePublicPath(folderPath, basePublicPath, isPublicRoot = false) {
  const encodedPath = folderPath
    .split("/")
    .map(encodeURIComponent)
    .join("/");

  return isPublicRoot
    ? `/${encodedPath}`
    : `/${basePublicPath}/${encodedPath}`;
}

function getImages(folderPath, basePublicPath, isPublicRoot = false) {
  const fullPath = isPublicRoot
    ? path.join(PUBLIC, folderPath)
    : path.join(PUBLIC, basePublicPath, folderPath);

  if (!fs.existsSync(fullPath)) return [];

  const publicPath = normalizePublicPath(folderPath, basePublicPath, isPublicRoot);

  return fs
    .readdirSync(fullPath)
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .sort()
    .map((f) => {
      const src = `${publicPath}/${encodeURIComponent(f)}`;
      const alt = buildImageText(f, publicPath);
      return {
        src,
        url: `${SITE_URL}${src}`,
        alt,
        title: alt,
      };
    });
}

function getImagesFromFolder(folder) {
  return getImages(folder, "images");
}

function getImagesFromPublicFolder(folder) {
  return getImages(folder, "", true);
}

function buildImagesManifest() {
  const manifest = {};

  manifest["all time best images"] = getImagesFromPublicFolder("all time best images");
  manifest["latest designs"] = getImagesFromPublicFolder("latest designs");

  categories.forEach((cat) => {
    if (cat.imageFolder) {
      manifest[cat.imageFolder] = getImagesFromFolder(cat.imageFolder);
    }
    cat.subcategories.forEach((sub) => {
      if (sub.imageFolder) {
        manifest[sub.imageFolder] = getImagesFromFolder(sub.imageFolder);
      }
    });
  });

  return manifest;
}

// ─── Category definitions (mirroring siteData.js) ───────────────
const categories = [
  {
    id: "back-hand",
    name: "Back Hand",
    slug: "back-hand-mehndi-designs",
    title: "Back Hand Mehndi Designs",
    icon: "🤚",
    imageFolder: "back/back hand",
    subcategories: [
      { id: "aesthetic-back-hand", name: "Aesthetic", slug: "aesthetic-back-hand-mehndi-designs", imageFolder: "back/asthetic back hand" },
      { id: "khafif-back-hand", name: "Khafif (Minimal)", slug: "khafif-back-hand-mehndi-designs", imageFolder: "back/Khafif (Minimal) back hand" },
      { id: "modern-back-hand", name: "Modern", slug: "modern-back-hand-mehndi-designs", imageFolder: "back/modren back hand" },
      { id: "simple-back-hand", name: "Simple", slug: "simple-back-hand-mehndi-designs", imageFolder: "back/Simple back hand" },
      { id: "stylish-back-hand", name: "Stylish", slug: "stylish-back-hand-mehndi-designs", imageFolder: "back/Stylish back hand" },
    ],
  },
  {
    id: "front-hand",
    name: "Front Hand",
    slug: "front-hand-mehndi-designs",
    title: "Front Hand Mehndi Designs",
    icon: "✋",
    imageFolder: "front/front hand",
    subcategories: [
      { id: "aesthetic-front-hand", name: "Aesthetic", slug: "aesthetic-front-hand-mehndi-designs", imageFolder: "front/asthetic front hand" },
      { id: "minimal-front-hand", name: "Minimal", slug: "minimal-front-hand-mehndi-designs", imageFolder: "front/minimal front hand" },
      { id: "modern-front-hand", name: "Modern", slug: "modern-front-hand-mehndi-designs", imageFolder: "front/modren front hand" },
      { id: "royal-front-hand", name: "Royal", slug: "royal-front-hand-mehndi-designs", imageFolder: "front/royal front hand" },
      { id: "simple-front-hand", name: "Simple", slug: "simple-front-hand-mehndi-designs", imageFolder: "front/simple front hand" },
      { id: "stylish-front-hand", name: "Stylish", slug: "stylish-front-hand-mehndi-designs", imageFolder: "front/stylish front hand" },
    ],
  },
  {
    id: "full-hand",
    name: "Full Hand",
    slug: "full-hand-mehndi-designs",
    title: "Full Hand Mehndi Designs",
    icon: "🖐️",
    imageFolder: null,
    subcategories: [
      { id: "front-full-hand", name: "Front Full Hand", slug: "front-full-hand-mehndi-designs", imageFolder: "full hand/front full hand" },
      { id: "modern-full-hand", name: "Modern", slug: "modern-full-hand-mehndi-designs", imageFolder: "full hand/latest Modren full hand" },
      { id: "simple-full-hand", name: "Simple", slug: "simple-full-hand-mehndi-designs", imageFolder: "full hand/simple full hand" },
      { id: "stylish-full-hand", name: "Stylish", slug: "stylish-full-hand-mehndi-designs", imageFolder: "full hand/stylish full hand" },
    ],
  },
  {
    id: "fingers",
    name: "Fingers",
    slug: "finger-mehndi-designs",
    title: "Finger Mehndi Designs",
    icon: "💅",
    imageFolder: "fingers/Finger mehndi design",
    subcategories: [
      { id: "back-finger", name: "Back Finger", slug: "back-finger-mehndi-designs", imageFolder: "fingers/back finger" },
      { id: "ring-finger", name: "Ring Style", slug: "ring-finger-mehndi-designs", imageFolder: "fingers/Ring" },
      { id: "royal-finger", name: "Royal", slug: "royal-finger-mehndi-designs", imageFolder: "fingers/Royal" },
      { id: "simple-finger", name: "Simple", slug: "simple-finger-mehndi-designs", imageFolder: "fingers/Simple" },
      { id: "stylish-finger", name: "Stylish", slug: "stylish-finger-mehndi-designs", imageFolder: "fingers/Stylish" },
    ],
  },
  {
    id: "arabic",
    name: "Arabic",
    slug: "arabic-mehndi-designs",
    title: "Arabic Mehndi Designs",
    icon: "🌙",
    imageFolder: "arabic",
    subcategories: [],
  },
  {
    id: "bridal",
    name: "Bridal",
    slug: "bridal-mehndi-designs",
    title: "Bridal Mehndi Designs",
    icon: "💍",
    imageFolder: "bridal",
    subcategories: [],
  },
];

// ─── Build the JSON ─────────────────────────────────────────────
function buildApiData() {
  const result = {
    siteUrl: SITE_URL,
    generatedAt: new Date().toISOString(),
    collections: [
      {
        id: "all-time-best",
        name: "All Time Best",
        slug: "best-mehndi-designs",
        title: "Best Mehndi Designs",
        icon: "⭐",
        images: getImagesFromPublicFolder("all time best images"),
      },
      {
        id: "latest-designs",
        name: "Latest Designs",
        slug: "latest-mehndi-designs",
        title: "Latest Mehndi Designs",
        icon: "🆕",
        images: getImagesFromPublicFolder("latest designs"),
      },
    ],
    categories: categories.map((cat) => {
      const catImages = cat.imageFolder
        ? getImagesFromFolder(cat.imageFolder)
        : [];

      // If this category has subcategories AND its own images (e.g. "Back Hand"),
      // inject it as the FIRST subcategory card so the app can navigate to it.
      const hubSubcategory =
        cat.subcategories.length > 0 && catImages.length > 0
          ? [
            {
              id: `${cat.id}-hub`,
              name: `All ${cat.name}`,
              slug: cat.slug,
              imageCount: catImages.length,
              thumbnail: catImages[0].url,
              images: catImages,
            },
          ]
          : [];

      return {
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        title: cat.title,
        icon: cat.icon,
        imageCount: catImages.length,
        thumbnail: catImages.length > 0 ? catImages[0].url : null,
        subcategories: [
          ...hubSubcategory,
          ...cat.subcategories.map((sub) => {
            const subImages = getImagesFromFolder(sub.imageFolder);
            return {
              id: sub.id,
              name: sub.name,
              slug: sub.slug,
              imageCount: subImages.length,
              thumbnail: subImages.length > 0 ? subImages[0].url : null,
              images: subImages,
            };
          }),
        ],
        // Direct images only for leaf categories (no subcategories)
        images: cat.subcategories.length === 0 ? catImages : [],
      };
    }),
  };

  // Calculate totals
  let totalImages = 0;
  result.collections.forEach((c) => (totalImages += c.images.length));
  result.categories.forEach((cat) => {
    totalImages += cat.images.length;
    cat.subcategories.forEach((sub) => (totalImages += sub.imageCount));
  });
  result.totalImages = totalImages;

  return result;
}

// ─── Write to /public/api/data.json ─────────────────────────────
const apiDir = path.join(PUBLIC, "api");
if (!fs.existsSync(apiDir)) fs.mkdirSync(apiDir, { recursive: true });
if (!fs.existsSync(APP_DATA)) fs.mkdirSync(APP_DATA, { recursive: true });

const data = buildApiData();
const outPath = path.join(apiDir, "data.json");
fs.writeFileSync(outPath, JSON.stringify(data, null, 2), "utf-8");

const imagesManifest = buildImagesManifest();
const imagesManifestPath = path.join(APP_DATA, "images.json");
fs.writeFileSync(imagesManifestPath, JSON.stringify(imagesManifest, null, 2), "utf-8");

console.log(`✅ Generated ${outPath}`);
console.log(`✅ Generated ${imagesManifestPath}`);
console.log(`   Total images: ${data.totalImages}`);
console.log(`   Categories: ${data.categories.length}`);
console.log(`   Collections: ${data.collections.length}`);

import Link from "next/link";
import { Suspense } from "react";
import { categories } from "../data/siteData";
import { getImagesFromFolder, getImagesFromPublicFolder } from "../lib/images";
import SearchClient from "./SearchClient";

export const metadata = {
  title: "Search Mehndi Images | Mehndi Designs",
  description:
    "Search mehndi images by category, style, and design name across the full Mehndi Designs gallery.",
  robots: {
    index: false,
    follow: true,
  },
};

function addImagesToIndex(index, seen, images, collection, href) {
  for (const image of images) {
    if (seen.has(image.src)) continue;

    seen.add(image.src);
    index.push({
      ...image,
      collection,
      href,
      searchText: `${image.title} ${image.alt} ${collection}`
        .toLowerCase()
        .replace(/\s+/g, " "),
    });
  }
}

function getSearchImages() {
  const index = [];
  const seen = new Set();

  addImagesToIndex(
    index,
    seen,
    getImagesFromPublicFolder("all time best images"),
    "Best Mehndi Designs",
    "/best-mehndi-designs"
  );
  addImagesToIndex(
    index,
    seen,
    getImagesFromPublicFolder("latest designs"),
    "Latest Mehndi Designs",
    "/latest-mehndi-designs"
  );

  for (const category of categories) {
    if (category.imageFolder) {
      addImagesToIndex(
        index,
        seen,
        getImagesFromFolder(category.imageFolder),
        category.title,
        `/${category.slug}`
      );
    }

    for (const subcategory of category.subcategories) {
      addImagesToIndex(
        index,
        seen,
        getImagesFromFolder(subcategory.imageFolder),
        subcategory.title,
        `/${subcategory.slug}`
      );
    }
  }

  return index;
}

export default function SearchPage() {
  const images = getSearchImages();

  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">/</span>
        <span className="current">Search</span>
      </nav>

      <section className="page-hero">
        <h1>Search Mehndi Images</h1>
        <p>Find mehndi images by design name, category, or style.</p>
      </section>

      <Suspense fallback={<p className="search-empty-text">Loading search...</p>}>
        <SearchClient images={images} />
      </Suspense>
    </>
  );
}

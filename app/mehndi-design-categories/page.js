import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema, GallerySchema } from "../components/SchemaMarkup";
import { categories } from "../data/siteData";
import { getImagesFromFolder } from "../lib/images";

export const metadata = {
  title: "Enjoy All Mehndi Design Categories at one click ",
  description:
    "Browse all mehndi design categories including back hand, front hand, full hand, finger, Arabic, bridal, simple, modern, stylish, and minimal henna designs.",
  keywords:
    "mehndi design categories, henna design categories, all mehndi designs, back hand designs, front hand designs, bridal mehndi categories",
  alternates: {
    canonical: "/mehndi-design-categories/",
  },
  openGraph: {
    title: "Mehndi Design Categories",
    description:
      "Browse every mehndi design category and subcategory in one place.",
    url: "/mehndi-design-categories/",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Mehndi Design Categories",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehndi Design Categories",
    description:
      "Browse every mehndi design category and subcategory in one place.",
    images: ["/logo.webp"],
  },
};

function getCategoryImages(category) {
  let folder = category.imageFolder;

  if (!folder && category.subcategories.length > 0) {
    folder = category.subcategories[0].imageFolder;
  }

  return folder ? getImagesFromFolder(folder) : [];
}

function getTotalCount(category) {
  const mainCount = category.imageFolder
    ? getImagesFromFolder(category.imageFolder).length
    : 0;

  const subcategoryCount = category.subcategories.reduce((total, subcategory) => {
    return total + getImagesFromFolder(subcategory.imageFolder).length;
  }, 0);

  return mainCount + subcategoryCount;
}

function CategoryTile({ href, image, title, count }) {
  return (
    <Link href={href} className="category-index-card">
      <span className="category-index-thumb">
        {image ? (
          <Image
            src={image.src}
            alt={title}
            width={555}
            height={689}
            sizes="(max-width: 768px) 45vw, 180px"
            loading="lazy"
          />
        ) : (
          <span className="category-index-placeholder">Designs</span>
        )}
      </span>
      <span className="category-index-title">{title}</span>
      <span className="category-index-count">{count} Designs</span>
    </Link>
  );
}

export default function MehndiDesignCategoriesPage() {
  const categoryGroups = categories.map((category) => {
    const categoryImages = getCategoryImages(category);
    const subcategories = category.subcategories.map((subcategory) => {
      const images = getImagesFromFolder(subcategory.imageFolder);

      return {
        ...subcategory,
        count: images.length,
        thumbnail: images[0] || null,
        displayName: `${subcategory.name} ${category.name} Designs`,
      };
    });

    return {
      ...category,
      count: getTotalCount(category),
      thumbnail: categoryImages[0] || null,
      displayName: `${category.name} Designs`,
      subcategories,
    };
  });

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mehndi-design.net/" },
          {
            name: "Mehndi Design Categories",
            url: "https://mehndi-design.net/mehndi-design-categories/",
          },
        ]}
      />
      <GallerySchema
        title="Mehndi Design Categories"
        description={metadata.description}
        url="https://mehndi-design.net/mehndi-design-categories/"
        images={categoryGroups
          .map((category) => category.thumbnail)
          .filter(Boolean)}
      />

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">/</span>
        <span className="current">Mehndi Design Categories</span>
      </nav>

      <section className="page-hero">
        <h1>Mehndi Design Categories</h1>
        <p>
          Browse every mehndi design category in one place, from back hand and
          front hand patterns to bridal, Arabic, finger, full hand, simple,
          modern, stylish, and minimal henna designs.
        </p>
      </section>

      <section>
        <h2 className="section-title">Main Categories</h2>
        <div className="category-index-grid">
          {categoryGroups.map((category) => (
            <CategoryTile
              key={category.id}
              href={`/${category.slug}`}
              image={category.thumbnail}
              title={category.displayName}
              count={category.count}
            />
          ))}
        </div>
      </section>

      {categoryGroups.map((category) =>
        category.subcategories.length > 0 ? (
          <section key={category.id} className="category-index-section">
            <h2 className="section-title">{category.name} Categories</h2>
            <div className="category-index-grid">
              {category.subcategories.map((subcategory) => (
                <CategoryTile
                  key={subcategory.id}
                  href={`/${subcategory.slug}`}
                  image={subcategory.thumbnail}
                  title={subcategory.displayName}
                  count={subcategory.count}
                />
              ))}
            </div>
          </section>
        ) : null
      )}
    </>
  );
}

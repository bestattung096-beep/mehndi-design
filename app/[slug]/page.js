import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getCategoryBySlug,
  getSubcategoryBySlug,
  getAllSlugs,
} from "../data/siteData";
import { getImagesFromFolder } from "../lib/images";
import ImageGallery from "../components/ImageGallery";
import { BreadcrumbSchema, GallerySchema } from "../components/SchemaMarkup";

const SITE_URL = "https://mehndi-design.net";
const socialImage = [
  {
    url: "/logo.webp",
    width: 1200,
    height: 630,
    alt: "Mehndi Design",
  },
];

// Generate all static paths at build time
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// Generate metadata for SEO (async for Next.js 15)
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const category = getCategoryBySlug(slug);
  if (category) {
    return {
      title: category.metaTitle,
      description: category.metaDescription,
      alternates: {
        canonical: `/${category.slug}/`,
      },
      openGraph: {
        title: category.title,
        description: category.metaDescription,
        url: `/${category.slug}/`,
        images: socialImage,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: category.title,
        description: category.metaDescription,
        images: ["/logo.webp"],
      },
    };
  }

  const subData = getSubcategoryBySlug(slug);
  if (subData) {
    return {
      title: subData.metaTitle,
      description: subData.metaDescription,
      alternates: {
        canonical: `/${subData.slug}/`,
      },
      openGraph: {
        title: subData.title,
        description: subData.metaDescription,
        url: `/${subData.slug}/`,
        images: socialImage,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: subData.title,
        description: subData.metaDescription,
        images: ["/logo.webp"],
      },
    };
  }

  return { title: "Page Not Found" };
}

export default async function SlugPage({ params }) {
  const { slug } = await params;

  // Check if it's a main category (hub page)
  const category = getCategoryBySlug(slug);
  if (category) {
    return <CategoryHubPage category={category} />;
  }

  // Check if it's a subcategory page
  const subData = getSubcategoryBySlug(slug);
  if (subData) {
    return (
      <SubcategoryPage subcategory={subData} parent={subData.parentCategory} />
    );
  }

  notFound();
}

function CategoryIndexTile({ href, image, title, count }) {
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

// ========== Hub Page Component ==========
function CategoryHubPage({ category }) {
  // Get subcategory thumbnails
  const subcategoryCards = category.subcategories.map((sub) => {
    const images = getImagesFromFolder(sub.imageFolder);
    const thumbnail = images.length > 0 ? images[0] : null;
    return {
      ...sub,
      thumbnail,
      count: images.length,
      displayName: sub.title.replace("Mehndi Designs", "Designs"),
    };
  });

  // Get main category images (the general folder)
  const mainImages = category.imageFolder
    ? getImagesFromFolder(category.imageFolder)
    : [];

  // Total count
  const totalCount =
    mainImages.length +
    subcategoryCards.reduce((sum, sub) => sum + sub.count, 0);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          {
            name: category.title,
            url: `${SITE_URL}/${category.slug}/`,
          },
        ]}
      />
      <GallerySchema
        title={category.title}
        description={category.description}
        url={`${SITE_URL}/${category.slug}/`}
        images={
          mainImages.length > 0
            ? mainImages
            : subcategoryCards.map((subcategory) => subcategory.thumbnail).filter(Boolean)
        }
      />
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">/</span>
        <span className="current">{category.name} Mehndi Designs</span>
      </nav>

      {/* Hero */}
      <section className="page-hero">
        <h1>{category.title}</h1>
        <p>{category.description}</p>
        <div className="image-count-badge">
          ✦ {totalCount}+ Designs Available
        </div>
      </section>

      {/* Subcategory Cards */}
      {subcategoryCards.length > 0 && (
        <section>
          <h2 className="section-title">{category.name} Sub Categories</h2>
          <div className="category-index-grid">
            {subcategoryCards.map((sub) => (
              <CategoryIndexTile
                key={sub.id}
                href={`/${sub.slug}`}
                image={sub.thumbnail}
                title={sub.displayName}
                count={sub.count}
              />
            ))}
          </div>
        </section>
      )}

      {/* Main Images Gallery */}
      {mainImages.length > 0 && (
        <section>
          <h2 className="section-title">{category.title}</h2>
          <ImageGallery images={mainImages} />
        </section>
      )}

      {/* SEO Content */}
      <section className="seo-content">
        <h2>About {category.title}</h2>
        <p>{category.description}</p>
        <p>
          Our {category.name.toLowerCase()} mehndi collection features{" "}
          {totalCount}+ unique designs across {subcategoryCards.length} different
          styles. Each design has been carefully selected to give you
          inspiration for your next henna application, whether it is for a
          wedding, festival, party, or everyday wear.
        </p>
      </section>
    </>
  );
}

// ========== Subcategory Page Component ==========
function SubcategoryPage({ subcategory, parent }) {
  const images = getImagesFromFolder(subcategory.imageFolder);

  // Get sibling subcategories for internal linking
  const siblings = parent.subcategories.filter(
    (s) => s.id !== subcategory.id
  );

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: parent.title, url: `${SITE_URL}/${parent.slug}/` },
          {
            name: subcategory.title,
            url: `${SITE_URL}/${subcategory.slug}/`,
          },
        ]}
      />
      <GallerySchema
        title={subcategory.title}
        description={subcategory.description}
        url={`${SITE_URL}/${subcategory.slug}/`}
        images={images}
      />
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">/</span>
        <Link href={`/${parent.slug}`}>{parent.name}</Link>
        <span className="sep">/</span>
        <span className="current">{subcategory.name}</span>
      </nav>

      {/* Hero */}
      <section className="page-hero">
        <h1>{subcategory.title}</h1>
        <p>{subcategory.description}</p>
        <div className="image-count-badge">
          ✦ {images.length} Designs
        </div>
      </section>

      {/* Image Gallery */}
      <ImageGallery images={images} />

      {/* Sibling Links */}
      {siblings.length > 0 && (
        <section className="sibling-section">
          <h2 className="section-title">
            Explore More {parent.name} Styles
          </h2>
          <div className="sibling-links">
            <Link
              href={`/${parent.slug}`}
              className="sibling-link"
            >
              All {parent.name}
            </Link>
            {siblings.map((sib) => (
              <Link
                href={`/${sib.slug}`}
                key={sib.id}
                className="sibling-link"
              >
                {sib.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* SEO Content */}
      <section className="seo-content">
        <h2>About {subcategory.title}</h2>
        <p>{subcategory.description}</p>
        <p>
          This collection showcases {images.length} unique{" "}
          {subcategory.name.toLowerCase()} designs for the{" "}
          {parent.name.toLowerCase()} area. Each pattern is carefully curated to
          provide inspiration for your next henna application. Browse through
          our gallery, click on any design to view it in full size, and find the
          perfect mehndi pattern for your next occasion.
        </p>
      </section>
    </>
  );
}

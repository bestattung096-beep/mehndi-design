import Link from "next/link";
import ImageGallery from "../components/ImageGallery";
import { BreadcrumbSchema, GallerySchema } from "../components/SchemaMarkup";
import { getImagesFromPublicFolder } from "../lib/images";

export const metadata = {
  title: "Best Mehndi Designs - 20 Most Famous Henna Designs | Mehndi Designs",
  description:
    "Explore the 20 all-time best mehndi designs including the most famous henna patterns, elegant florals, royal bridal designs, and stunning peacock motifs.",
  keywords:
    "best mehndi designs, famous henna designs, top mehndi designs, most popular henna, beautiful mehndi, best henna patterns",
  alternates: {
    canonical: "/best-mehndi-designs/",
  },
  openGraph: {
    title: "Best Mehndi Designs - 20 Most Famous Henna Designs",
    description:
      "Explore the 20 all-time best mehndi designs and most famous henna patterns.",
    url: "/best-mehndi-designs/",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Best Mehndi Designs",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Mehndi Designs - 20 Most Famous Henna Designs",
    description:
      "Explore the 20 all-time best mehndi designs and most famous henna patterns.",
    images: ["/logo.webp"],
  },
};

export default function BestMehndiDesignsPage() {
  const images = getImagesFromPublicFolder("all time best images");

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mehndi-design.net/" },
          {
            name: "Best Mehndi Designs",
            url: "https://mehndi-design.net/best-mehndi-designs/",
          },
        ]}
      />
      <GallerySchema
        title="Best Mehndi Designs"
        description={metadata.description}
        url="https://mehndi-design.net/best-mehndi-designs/"
        images={images}
      />

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">/</span>
        <span className="current">Best Mehndi Designs</span>
      </nav>

      <section className="page-hero">
        <h1>Best Mehndi Designs</h1>
        <p>
          Discover the all-time best mehndi designs and most famous henna
          patterns hand-picked for their beauty, intricacy, and elegance.
          Perfect for weddings, festivals, and special occasions.
        </p>
        <div className="image-count-badge">20 Hand-Picked Designs</div>
      </section>

      <ImageGallery images={images} />

      <section className="seo-content">
        <h2>The Most Famous Henna Designs of All Time</h2>
        <p>
          This curated collection showcases the 20 most beautiful and iconic
          mehndi designs ever created. Each design has been carefully selected
          for its artistic excellence, featuring the finest examples of floral
          mehndi, geometric henna, peacock motifs, bridal patterns, and Arabic
          vine-style art.
        </p>
        <p>
          Whether you are looking for inspiration for a wedding, Eid
          celebration, or want to try a classic henna pattern, these timeless
          best mehndi designs will give you everything you need. Browse, save,
          and download your favorites.
        </p>
      </section>
    </>
  );
}

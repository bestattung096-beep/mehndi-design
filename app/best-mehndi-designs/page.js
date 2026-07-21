import Link from "next/link";
import ImageGallery from "../components/ImageGallery";
import RichContent from "../components/RichContent";
import { BreadcrumbSchema, GallerySchema } from "../components/SchemaMarkup";
import { getImagesFromPublicFolder } from "../lib/images";
import { siteContent } from "../data/siteContent";

export const metadata = {
  title: "Enjoy all time Best Mehndi Designs for your events",
  description:
    "Explore top evergreen best mehndi designs, the most famous henna patterns, elegant florals, royal bridal designs, and stunning peacock motifs.",
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
  const content = siteContent["best-mehndi-designs"];

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
        <div className="image-count-badge">20 Hand-Picked Designs</div>
      </section>

      <ImageGallery images={images} />

      <RichContent
        heading={content?.heading || "Best Mehndi Designs"}
        paragraphs={content?.paragraphs}
      />
    </>
  );
}

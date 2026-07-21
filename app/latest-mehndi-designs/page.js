import Link from "next/link";
import ImageGallery from "../components/ImageGallery";
import RichContent from "../components/RichContent";
import { BreadcrumbSchema, GallerySchema } from "../components/SchemaMarkup";
import { getImagesFromPublicFolder } from "../lib/images";
import { siteContent } from "../data/siteContent";

export const metadata = {
  title: "Enjoy trending Latest Mehndi Designs for your beautiful hands",
  description:
    "These are the latest mehndi designs of year 2026 including new henna patterns, modern styles, ",
  keywords:
    "latest mehndi designs, new henna designs, simple latest mehndi, trendy henna patterns, modern mehndi design",
  alternates: {
    canonical: "/latest-mehndi-designs/",
  },
  openGraph: {
    title: "Latest Mehndi Designs - 26 New Henna Designs",
    description:
      "Explore the 26 latest mehndi designs and new henna patterns.",
    url: "/latest-mehndi-designs/",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Latest Mehndi Designs",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest Mehndi Designs - 26 New Henna Designs",
    description:
      "Explore the 26 latest mehndi designs and new henna patterns.",
    images: ["/logo.webp"],
  },
};

export default function LatestMehndiDesignsPage() {
  const images = getImagesFromPublicFolder("latest designs");
  const content = siteContent["latest-mehndi-designs"];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mehndi-design.net/" },
          {
            name: "Latest Mehndi Designs",
            url: "https://mehndi-design.net/latest-mehndi-designs/",
          },
        ]}
      />
      <GallerySchema
        title="Latest Mehndi Designs"
        description={metadata.description}
        url="https://mehndi-design.net/latest-mehndi-designs/"
        images={images}
      />

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">/</span>
        <span className="current">Latest Mehndi Designs</span>
      </nav>

      <section className="page-hero">
        <h1>Latest Mehndi Designs</h1>
        <div className="image-count-badge">26 New Designs Added</div>
      </section>

      <ImageGallery images={images} />

      <RichContent
        heading={content?.heading || "Latest Mehndi Designs"}
        paragraphs={content?.paragraphs}
      />
    </>
  );
}

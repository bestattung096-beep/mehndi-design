import Link from "next/link";
import ImageGallery from "../components/ImageGallery";
import { BreadcrumbSchema, GallerySchema } from "../components/SchemaMarkup";
import { getImagesFromPublicFolder } from "../lib/images";

export const metadata = {
  title: "Latest Mehndi Designs - 26 New Henna Designs | Mehndi Designs",
  description:
    "Explore the 26 latest mehndi designs including new henna patterns, modern styles, flowing vine motifs, and stylish finger cuff patterns for every occasion.",
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
        <p>
          Stay ahead of the trend with our collection of the latest mehndi designs
          and new henna patterns. From minimalist back hand lines to glamorous
          modern floral accents, find fresh inspiration here.
        </p>
        <div className="image-count-badge">26 New Designs Added</div>
      </section>

      <ImageGallery images={images} />

      <section className="seo-content">
        <h2>Fresh & Trendy New Henna Designs</h2>
        <p>
          Our latest collection features 26 newly added mehndi designs that
          blend traditional henna artistry with modern, contemporary styles.
          Here you will find creative new henna designs including finger cuffs,
          aesthetic wrist chains, and stunning mesh patterns that are currently
          trending.
        </p>
        <p>
          Every image in this gallery is formatted in high resolution, perfectly
          optimized, and available for direct download. Save your favorite modern
          mehndi pattern and show it to your henna artist for your next special
          event.
        </p>
      </section>
    </>
  );
}

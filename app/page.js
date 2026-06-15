import Link from "next/link";
import Image from "next/image";
import { categories } from "./data/siteData";
import { getImagesFromFolder, getImagesFromPublicFolder } from "./lib/images";
import ImageGallery from "./components/ImageGallery";

export const metadata = {
  title: "1500+ Beautiful Mehndi Designs & Henna Patterns for Every Occasion",
  description:
    "Enjoy stunning mehndi designs for back hand, front hand, full hand, fingers, arabic, and bridal henna. Find your perfect henna design today.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mehndi Designs - 1500+ Beautiful Henna Patterns",
    description:
      "Browse our curated collection of mehndi designs for every occasion.",
    url: "/",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Mehndi Design",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehndi Designs - 1500+ Beautiful Henna Patterns",
    description:
      "Browse our curated collection of mehndi designs for every occasion.",
    images: ["/logo.webp"],
  },
};

export default function HomePage() {
  const latestImages = getImagesFromPublicFolder("latest designs");
  const allTimeBestImages = getImagesFromPublicFolder("all time best images");
  const bridalPreviewImages = getImagesFromFolder("bridal").slice(0, 6);
  const minimalBackHandPreviewImages = getImagesFromFolder(
    "back/Khafif (Minimal) back hand"
  ).slice(0, 6);
  const royalFrontHandPreviewImages = getImagesFromFolder(
    "front/royal front hand"
  ).slice(0, 6);

  // Get first image from each category as thumbnail
  const categoryCards = categories.map((cat) => {
    let folder = cat.imageFolder;
    // If no direct images (like full hand hub), use first subcategory
    if (!folder && cat.subcategories.length > 0) {
      folder = cat.subcategories[0].imageFolder;
    }
    const images = getImagesFromFolder(folder);
    const thumbnail = images.length > 0 ? images[0] : null;

    return { ...cat, thumbnail };
  });

  return (
    <>
      <section className="page-hero">
        <h1>
          <span>Mehndi Designs</span> — Beautiful Henna Patterns
        </h1>
      </section>

      <section>
        <h2 className="section-title">Browse Categories</h2>
        <div className="home-category-grid">
          {categoryCards.map((cat, index) => (
            <Link
              href={`/${cat.slug}`}
              key={cat.id}
              className="home-category-card"
            >
              {cat.thumbnail ? (
                <span className="home-card-thumb">
                  <Image
                    src={cat.thumbnail.src}
                    alt={`${cat.name} mehndi designs`}
                    width={555}
                    height={689}
                    sizes="(max-width: 768px) 33vw, 120px"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </span>
              ) : (
                <span className="home-card-thumb home-card-placeholder">
                  {cat.icon}
                </span>
              )}
              <span className="home-card-title">
                {cat.name} Designs
              </span>
            </Link>
          ))}
        </div>
        <div className="category-see-all-wrap">
          <Link href="/mehndi-design-categories" className="show-more-button">
            See All
          </Link>
        </div>
      </section>

      <section>
        <h2 className="section-title">All Time Best Mehndi Henna Designs</h2>
        <ImageGallery images={allTimeBestImages} />
      </section>

      <section>
        <h2 className="section-title">Latest Mehndi Designs</h2>
        <ImageGallery images={latestImages} />
      </section>

      <section>
        <h2 className="section-title">Bridal Mehndi Designs</h2>
        <ImageGallery images={bridalPreviewImages} />
        <div className="show-more-wrap">
          <Link href="/bridal-mehndi-designs" className="show-more-button">
            Show More
          </Link>
        </div>
      </section>

      <section>
        <h2 className="section-title">Minimal Back Hand Mehndi Designs</h2>
        <ImageGallery images={minimalBackHandPreviewImages} />
        <div className="show-more-wrap">
          <Link
            href="/khafif-back-hand-mehndi-designs"
            className="show-more-button"
          >
            Show More
          </Link>
        </div>
      </section>

      <section>
        <h2 className="section-title">Royal Front Hand Mehndi Designs</h2>
        <ImageGallery images={royalFrontHandPreviewImages} />
        <div className="show-more-wrap">
          <Link
            href="/royal-front-hand-mehndi-designs"
            className="show-more-button"
          >
            Show More
          </Link>
        </div>
      </section>

      <section className="seo-content">
        <p>
          Mehndi is a beautiful part of many{" "}
          <a href="https://en.wikipedia.org/wiki/Mehndi">cultures</a> and is
          loved by women and girls of all ages. A mehndi design can make hands
          look elegant and attractive for weddings, Eid, parties, and family
          gatherings. Many people prefer a simple mehndi design because it is
          quick to apply and looks neat on both hands and feet. If you are a
          beginner, a mehndi design simple pattern with flowers, leaves, and
          small vines is a perfect choice.
        </p>
        <p>
          Nowadays, many women search for a mehndi design easy and beautiful
          style that can be completed in a short time without professional help.
          An easy mehndi design is ideal for students, working women, and anyone
          who wants a stylish look with less effort. You can also find a variety
          of mehndi design easy patterns online, ranging from{" "}
          <Link href="/arabic-mehndi-designs">
            traditional Arabic mehndi design
          </Link>{" "}
          to modern minimalist artwork. Looking at a mehndi design photo can
          help you choose the perfect pattern before applying it. A mehndi
          simple design often includes floral motifs, curved lines, and delicate
          dots that create a charming appearance. Many websites and social media
          platforms share a simple mehndi design photo collection to inspire
          users with the latest trends and creative ideas.
        </p>
        <p>
          For special occasions, a simple mehndi design easy and beautiful
          option is always popular because it combines elegance with simplicity.
          These designs work well for beginners and can be applied quickly at
          home. If you love modern body art, a henna tattoo mehndi design simple
          pattern is a great choice. These designs are inspired by tattoo styles
          and feature unique shapes, geometric patterns, and artistic elements.
          Many people also enjoy a henna mehndi design because it offers a fresh
          and fashionable look while maintaining the traditional beauty of henna.
        </p>
        <p>
          Whether you prefer bold patterns or delicate details, there is a
          mehndi style for everyone. From floral trails and heart shapes to
          Arabic strokes and mandala art, mehndi continues to evolve with new
          trends every year. By exploring different designs and practicing
          regularly, anyone can create stunning mehndi patterns at home. Choosing
          the right design depends on your occasion, personal style, and skill
          level. With so many beautiful options available, finding the perfect
          mehndi design has never been easier. Whether you are preparing for a
          wedding, Eid celebration, festival, or casual event, a simple and
          elegant mehndi design can enhance your overall look and add a touch of
          traditional charm to your appearance.
        </p>
      </section>
    </>
  );
}

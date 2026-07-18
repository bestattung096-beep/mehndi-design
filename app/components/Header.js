import Image from "next/image";
import Link from "next/link";
import { getNavCategories } from "../data/siteData";

export default function Header() {
  const navItems = getNavCategories();
  const primaryNavItems = navItems.slice(0, 4);
  const categoryMenuItems = [
    { name: "Arabic Designs", slug: "arabic-mehndi-designs" },
    { name: "Bridal Designs", slug: "bridal-mehndi-designs" },
    { name: "Kids Designs", slug: "kids-mehndi-designs" },
    { name: "Leg Designs", slug: "leg-mehndi-designs" },
    { name: "Flower Designs", slug: "flower-mehndi-designs" },
    { name: "Latest Designs", slug: "latest-mehndi-designs" },
    { name: "Best Designs", slug: "best-mehndi-designs" },
  ];



  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo" aria-label="Mehndi Designs home">
          <span className="logo-icon">
            <Image
              src="/logo.webp"
              alt="Mehndi Designs"
              fill
              sizes="(max-width: 480px) 185px, (max-width: 768px) 250px, 320px"
              className="logo-image"
            />
          </span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary navigation">
          {primaryNavItems.map((item) => (
            <div className="nav-item" key={item.slug}>
              <Link href={`/${item.slug}`} className="nav-link">
                {item.name}
                {item.hasSubcategories && <span className="nav-arrow">v</span>}
              </Link>
              {item.hasSubcategories && item.subcategories.length > 0 && (
                <div className="nav-dropdown">
                  {item.subcategories.map((sub) => (
                    <Link
                      href={`/${sub.slug}`}
                      className="dropdown-link"
                      key={sub.slug}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="nav-item">
            <Link href="/mehndi-design-categories" className="nav-link">
              Mehndi Design Categories
              <span className="nav-arrow">v</span>
            </Link>
            <div className="nav-dropdown">
              {categoryMenuItems.map((item) => (
                <Link
                  href={`/${item.slug}`}
                  className="dropdown-link"
                  key={item.slug}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="header-actions">
          <details className="search-menu">
            <summary className="search-toggle" aria-label="Search images">
              <span className="search-icon" aria-hidden="true" />
            </summary>
            <form action="/search" className="header-search-panel" role="search">
              <input
                type="search"
                name="q"
                placeholder="Search images"
                aria-label="Search images"
              />
              <button type="submit">Search</button>
            </form>
          </details>

          <details className="mobile-menu">
            <summary className="mobile-summary" aria-label="Toggle menu">
              <span className="mobile-toggle-line" />
              <span className="mobile-toggle-line" />
              <span className="mobile-toggle-line" />
            </summary>
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {primaryNavItems.map((item) => (
                <div className="mobile-nav-group" key={item.slug}>
                  <Link href={`/${item.slug}`} className="mobile-nav-link">
                    {item.name}
                  </Link>
                  {item.hasSubcategories && (
                    <div className="mobile-sub-links">
                      {item.subcategories.map((sub) => (
                        <Link
                          href={`/${sub.slug}`}
                          className="mobile-sub-link"
                          key={sub.slug}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mobile-nav-group">
                <Link
                  href="/mehndi-design-categories"
                  className="mobile-nav-link"
                >
                  Mehndi Design Categories
                </Link>
                <div className="mobile-sub-links">
                  {categoryMenuItems.map((item) => (
                    <Link
                      href={`/${item.slug}`}
                      className="mobile-sub-link"
                      key={item.slug}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

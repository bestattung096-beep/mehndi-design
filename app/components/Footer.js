import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-logo" aria-label="Mehndi Design home">
            <Image
              src="/logo.webp"
              alt="Mehndi Design"
              width={250}
              height={58}
              className="footer-logo-image"
              priority={false}
            />
          </Link>

          <div className="footer-socials" aria-label="Social profiles">
            <a
              href="https://www.facebook.com/profile.php?id=61590777834598"
              aria-label="Facebook"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8.5V6.8c0-.7.3-1.1 1.2-1.1H17V2.6c-.9-.1-1.7-.2-2.6-.2-2.7 0-4.5 1.6-4.5 4.6v1.5H7v3.5h2.9v9.6H14V12h2.8l.5-3.5H14Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/mehndidesign0719/"
              aria-label="Instagram"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.8 2.8h8.4c2.8 0 5 2.2 5 5v8.4c0 2.8-2.2 5-5 5H7.8c-2.8 0-5-2.2-5-5V7.8c0-2.8 2.2-5 5-5Zm0 2A3 3 0 0 0 4.8 7.8v8.4a3 3 0 0 0 3 3h8.4a3 3 0 0 0 3-3V7.8a3 3 0 0 0-3-3H7.8Zm4.2 3.4a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6Zm0 2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6Zm4.1-2.9a1 1 0 1 1 0 2.1 1 1 0 0 1 0-2.1Z" />
              </svg>
            </a>
            <a
              href="https://x.com/MehndiDesigv"
              aria-label="X"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 10.4 21.4 2h-2.6l-6 6.8L8.1 2H2.3l7.8 11.3L2 22h2.6l6.6-7.2L16.1 22h5.8L14 10.4Zm-2 2.2-1.1-1.5-5-7.1h1.2l4.7 6.7 1.1 1.5 5.3 7.7H17l-5-7.3Z" />
              </svg>
            </a>
            <a
              href="https://www.pinterest.com/mehndidesign0719/"
              aria-label="Pinterest"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.3 2.3c-5.2 0-8 3.5-8 7.3 0 1.8 1 4 2.5 4.7.2.1.4 0 .5-.3l.4-1.6c.1-.2 0-.3-.1-.5-.5-.6-.8-1.4-.8-2.4 0-2.7 2.1-5.3 5.3-5.3 2.9 0 4.9 2 4.9 4.8 0 3.2-1.6 5.5-3.8 5.5-1.2 0-2.1-1-1.8-2.2.3-1.5 1-3.1 1-4.2 0-1-.5-1.8-1.6-1.8-1.3 0-2.3 1.3-2.3 3.1 0 1.1.4 1.9.4 1.9l-1.6 6.5c-.3 1.4-.2 3.4-.1 4.6h.2c.6-.9 1.4-2.4 1.8-3.8l.9-3.4c.5.8 1.6 1.5 2.8 1.5 3.7 0 6.5-3.4 6.5-7.9 0-3.7-3.1-6.5-7.1-6.5Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-nav-area">
          <div className="footer-links">
            <Link href="/about-us">About Us</Link>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
          <p className="footer-text">
            &copy; 2026 Mehndi Design - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { OrganizationSchema, WebSiteSchema } from "./components/SchemaMarkup";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://mehndi-design.net"),
  title: "1500+ Beautiful Mehndi Designs & Henna Patterns for Every Occasion",
  description:
    "Enjoy stunning mehndi designs for back hand, front hand, full hand, fingers, arabic, and bridal henna. Find your perfect henna design today.",
  keywords:
    "mehndi designs, henna designs, back hand mehndi, front hand mehndi, bridal mehndi, arabic mehndi, finger mehndi, simple mehndi, stylish mehndi",
  icons: {
    icon: [{ url: "/site-icon.webp", type: "image/webp" }],
    shortcut: [{ url: "/site-icon.webp", type: "image/webp" }],
  },
  openGraph: {
    title: "Mehndi Designs - 1500+ Beautiful Henna Patterns",
    description:
      "Browse our curated collection of mehndi designs for every occasion.",
    url: "/",
    siteName: "Mehndi Design",
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
  verification: {
    google: "Ci7q4pogV_yNS6XbsBrYn_AGlqxrrVt9rwKTVz6L5yU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <OrganizationSchema />
        <WebSiteSchema />
        <Header />
        <main className="main">{children}</main>
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y6JY1078EH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y6JY1078EH');
          `}
        </Script>
      </body>
    </html>
  );
}

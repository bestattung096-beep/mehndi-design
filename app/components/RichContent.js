import Link from "next/link";

const INTERNAL_LINKS = {
  "front hand mehndi designs": "/front-hand-mehndi-designs/",
  "fingers mehndi designs": "/finger-mehndi-designs/",
  "finger mehndi designs": "/finger-mehndi-designs/",
  "Bridal Mehndi Designs": "/bridal-mehndi-designs/",
  "full hand mehndi designs": "/full-hand-mehndi-designs/",
  "kids mehndi designs": "/kids-mehndi-designs/",
  "flower mehndi designs": "/flower-mehndi-designs/",
  "back hand mehndi designs": "/back-hand-mehndi-designs/",
  "arabic mehndi designs": "/arabic-mehndi-designs/",
  "mehndi designs": "/",
  "dulhan mehndi designs": "/bridal-mehndi-designs/",
};

function renderParagraphWithLinks(text) {
  const parts = [];
  const regex = /\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const phrase = match[1].trim();
    const targetUrl = INTERNAL_LINKS[phrase];
    if (targetUrl) {
      parts.push(
        <Link key={match.index} href={targetUrl} className="internal-seo-link">
          {phrase}
        </Link>
      );
    } else {
      parts.push(<strong key={match.index}>{phrase}</strong>);
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}

export default function RichContent({ heading, paragraphs }) {
  if (!paragraphs || paragraphs.length === 0) return null;

  return (
    <section className="seo-content">
      {heading && <h2>About {heading}</h2>}
      {paragraphs.map((p, idx) => (
        <p key={idx}>{renderParagraphWithLinks(p)}</p>
      ))}
    </section>
  );
}

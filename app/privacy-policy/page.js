import { readFileSync } from "fs";
import { join } from "path";

export const metadata = {
  title: "Privacy Policy | Mehndi Design",
  robots: {
    index: false,
    follow: true,
  },
};

const sectionHeadings = new Set([
  "Consent",
  "Information we collect",
  "How we use your information",
  "Log Files",
  "Google DoubleClick DART Cookie",
  "Advertising Partners Privacy Policies",
  "Third Party Privacy Policies",
  "CCPA Privacy Rights (Do Not Sell My Personal Information)",
  "GDPR Data Protection Rights",
  "Children's Information",
  "Changes to This Privacy Policy",
  "Contact Us",
]);

function getPolicyLines() {
  const content = readFileSync(
    join(process.cwd(), "app/data/privacyPolicy.txt"),
    "utf8",
  );

  return content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function isSectionHeading(line) {
  return sectionHeadings.has(line.replace(/\u2019/g, "'"));
}

export default function PrivacyPolicyPage() {
  const lines = getPolicyLines();
  const [title, ...contentLines] = lines;

  return (
    <article className="legal-page">
      <h1>{title}</h1>
      {contentLines.map((line, index) =>
        isSectionHeading(line) ? (
          <h2 key={`${line}-${index}`}>{line}</h2>
        ) : (
          <p key={`${line}-${index}`}>{line}</p>
        ),
      )}
    </article>
  );
}

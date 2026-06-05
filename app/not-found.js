import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
        padding: "40px 24px",
      }}
    >
      <div style={{ fontSize: "5rem", marginBottom: "16px" }}>✿</div>
      <h1
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
          color: "var(--color-primary-light)",
          marginBottom: "16px",
        }}
      >
        Page Not Found
      </h1>
      <p
        style={{
          color: "var(--color-text-secondary)",
          fontSize: "1rem",
          maxWidth: "480px",
          marginBottom: "32px",
          lineHeight: "1.7",
        }}
      >
        The page you are looking for does not exist. Try browsing our mehndi
        design categories below.
      </p>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
        <Link
          href="/"
          style={{
            padding: "12px 28px",
            background: "var(--color-primary)",
            color: "#fff",
            borderRadius: "var(--radius-lg)",
            fontWeight: "600",
            fontSize: "0.95rem",
          }}
        >
          Go Home
        </Link>
        <Link
          href="/back-hand-mehndi-designs"
          style={{
            padding: "12px 28px",
            background: "var(--color-bg-card)",
            color: "var(--color-text)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-lg)",
            fontWeight: "500",
            fontSize: "0.95rem",
          }}
        >
          Back Hand Designs
        </Link>
        <Link
          href="/bridal-mehndi-designs"
          style={{
            padding: "12px 28px",
            background: "var(--color-bg-card)",
            color: "var(--color-text)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-lg)",
            fontWeight: "500",
            fontSize: "0.95rem",
          }}
        >
          Bridal Designs
        </Link>
      </div>
    </div>
  );
}

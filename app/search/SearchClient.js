"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ImageGallery from "../components/ImageGallery";

export default function SearchClient({ images }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get("q") || "");

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return [];

    return images
      .filter((image) => image.searchText.includes(normalizedQuery))
      .slice(0, 120);
  }, [images, query]);

  function handleSubmit(event) {
    event.preventDefault();

    const normalizedQuery = query.trim();
    const nextUrl = normalizedQuery
      ? `/search?q=${encodeURIComponent(normalizedQuery)}`
      : "/search";

    router.push(nextUrl);
  }

  return (
    <>
      <form className="search-page-form" onSubmit={handleSubmit}>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search mehndi images"
          aria-label="Search mehndi images"
        />
        <button type="submit">Search</button>
      </form>

      {query.trim() ? (
        <>
          <p className="search-results-meta">
            {results.length} image{results.length === 1 ? "" : "s"} found
          </p>
          <ImageGallery images={results} />
        </>
      ) : (
        <p className="search-empty-text">
          Search by style, category, or design name.
        </p>
      )}
    </>
  );
}

// app/search/page.tsx
import { getProducts } from "lib/shopify";
import Link from "next/link";

type SearchParams = { q?: string | string[] };

function getQuery(searchParams?: SearchParams) {
  const raw = searchParams?.q;
  const value = Array.isArray(raw) ? raw[0] : raw;
  return value?.trim().replace(/\s+/g, " ") ?? "";
}

function buildSearchQuery(term: string) {
  const sanitized = term.replace(/"/g, "");
  return `title:*${sanitized}*`;
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const query = getQuery(searchParams);

  if (!query) {
    return (
      <main className="mx-auto max-w-3xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold">Search</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Append <code>?q=test</code> to this page&apos;s URL to see matching products.
        </p>
      </main>
    );
  }

  const products = await getProducts({ query: buildSearchQuery(query) });
  const hasResults = products.length > 0;
  const resultLabel = products.length === 1 ? "result" : "results";

  return (
    <main className="mx-auto max-w-3xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">Search</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Showing {products.length} {resultLabel} for{" "}
          <span className="font-medium text-black dark:text-white">
            &quot;{query}&quot;
          </span>
        </p>
      </header>

      {hasResults ? (
        <ul className="space-y-4">
          {products.map((product) => {
            const minimumPrice = product.priceRange?.minVariantPrice;
            return (
              <li key={product.handle} className="space-y-1">
                <Link
                  href={`/product/${product.handle}`}
                  className="text-lg font-medium hover:underline"
                >
                  {product.title}
                </Link>
                {minimumPrice ? (
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {minimumPrice.amount} {minimumPrice.currencyCode}
                  </p>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No matching products found.</p>
      )}
    </main>
  );
}

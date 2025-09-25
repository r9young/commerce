
/*
 SEARCH RESULT PAGE

 0. Next.js gives props → props.searchParams = { q: "hat", sort: "price-asc" }
 1. `await props.searchParams` → get the query object.
 2. Extract values: `searchValue = q`, `sort`.
 3. Find sorting config: `sorting.find(...) || defaultSort`.
 4. Call backend: `getProducts({ sortKey, reverse, query: searchValue })`.
 5. Decide result label: `"result"` or `"results"`.
 6. Render
    * If `searchValue` → show banner (`Showing…` or `No products…`).
    * If `products.length > 0` → render `<Grid><ProductGridItems />`.
*/



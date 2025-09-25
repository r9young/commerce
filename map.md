```typescript


[Navbar <Form action="/search">]
   |
   |  User types <input name="q">, picks sort (optional)
   |  Submit
   v
Browser navigates → /search?q=<term>&sort=<slug>
   |
   v
SearchPage (Server Component)
  1) await props.searchParams
  2) const { q: searchValue, sort } = searchParams
     - normalize searchValue (trim, collapse spaces) ← (recommended)
     - if empty after trim → skip querying (render empty-state)
  3) const { sortKey, reverse } =
       sorting.find(s => s.slug === sort) || defaultSort   ← (fallback)
  4) const products = await getProducts({
       sortKey, reverse, query: searchValue
     })
   |
   v
Render:
  If searchValue:
    - If products.length === 0:
        "There are no products that match "<term>""
    - Else:
        "Showing N result(s) for "<term>""
  If products.length > 0:
    <Grid> → <ProductGridItems products={products} />
  Else:
    (No grid)

```


```typescript

[User types in navbar search box]
        |
        v
  <Form action="/search" method="GET">
  ?q=<term>&sort=<slug?>
        |
        v
     /search
   (Server Component)
        |
        v
   await searchParams
        |
        v
   q := trim/collapse(q)
   if !q -> render empty-state (no fetch)
        |
        v
   ({sortKey, reverse} from slug) || defaultSort
        |
        v
   products = getProducts({ query: q, sortKey, reverse })
        |
        v
   products.length ?
      ├─ 0 → "No products match "<q>""
      └─ N → "Showing N result(s) for "<q>""
               + <Grid><ProductGridItems /></Grid>


```


## 1. The Form

```typescript

<Form action="/search" method="GET">
  <input
    type="text"
    name="q"
    placeholder="Search for Product..."
  />
  <button type="submit">Search</button>
</Form>

```

When this form is submitted, take whatever is inside it and navigate to /search.

## 3. What happens on submit?
1. you type "hat" in the input field
2. the input has name="q"
3. on submit the browswer builds a url: /search?q = hat

## 4. How does it connect to SearchPage
The URL /search?q=hat match with the route app/search/page.tsx
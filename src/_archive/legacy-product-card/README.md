# Archived: legacy ProductCard

`ProductCard.tsx`, `ProductCard.module.css`, and `products.ts` were a
generic product-card component and its data source. A full repository
search confirmed nothing imports `ProductCard` — the live site renders
product listings through `PRODUCT_CATEGORIES` (`src/data/productsData.ts`)
and the per-product page components under `src/app/products/[slug]/`
instead.

Kept here for reference only, isolated from `src/app` and `src/components`
so it is never bundled into a route. Safe to delete entirely if never
needed again.

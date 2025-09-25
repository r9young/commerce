## About the Branch

Purpose – summarize the layered Shopify Admin fetch approach and its goals.

Layer overview – briefly describe 

- Layer 1 (HTTP metadata), 
- Layer 2 (GraphQL envelope), and 
- Layer 3 (Shopify userErrors), pointing readers to lib/create_product/index/index_layer1.ts, index_layer2.ts, and index_layer3.ts for details.

Mutation and types – reference lib/create_product/mutation/mutation.ts and lib/create_product/types/types.ts to show how inputs and payloads are structured.

Usage example – document how createProduct orchestrates the layers once it returns the real payload.





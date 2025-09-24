jest.mock('next/cache', () => ({
  cacheTag: () => {},
  unstable_cacheTag: () => {},
  unstable_cacheLife: () => {},
  cacheLife: () => {},
}));

import { getProducts } from './index';

const mockProducts = [
  {
    id: 'prod_1',
    handle: 'test-product',
    availableForSale: true,
    title: 'Test Product',
    description: 'A test product',
    descriptionHtml: '<p>A test product</p>',
    options: [],
    priceRange: {
      maxVariantPrice: { amount: '100', currencyCode: 'USD' },
      minVariantPrice: { amount: '100', currencyCode: 'USD' }
    },
    variants: { edges: [] },
    featuredImage: { url: '', altText: '', width: 0, height: 0 },
    images: { edges: [] },
    seo: { title: 'Test Product', description: 'SEO description' },
    tags: [],
    updatedAt: new Date().toISOString()
  }
];

describe('getProducts', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => ({
        data: {
          products: {
            edges: mockProducts.map(product => ({ node: product }))
          }
        }
      }),
      status: 200
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should fetch and return products', async () => {
    const products = await getProducts({ query: 'test' });
    expect(products).toBeDefined();
    expect(products.length).toBe(1);
    expect(products[0]?.handle).toBe('test-product');
  });

  it('should return an empty array if no products', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      json: async () => ({
        data: { products: { edges: [] } }
      }),
      status: 200
    });
    const products = await getProducts({ query: 'none' });
    expect(products).toEqual([]);
  });
});
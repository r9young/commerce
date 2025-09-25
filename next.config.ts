export default {
  experimental: {
    ppr: true,
    inlineCss: true,
    useCache: true
  },
  /*
   when you load a shopify CDN image through <image>, 
   Next.js fetches the original (.png/.jpg) -> converts -> serves the best version for each browser
  */

  images: {
    formats: ['image/avif', 'image/webp'], // tell Next.js which remote images its allowed to fetch and optimized
    remotePatterns: [ // tells Next.js which remote images it's allowed to fetch and optimize
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      }
    ]
  }
};

/*

  remotePatterns is specifically to allow Shopify's CDN images, 
  and the formats option tells Next.js to serve optimized modern formats


  images:formats: ['image/avif', 'image/webp'],
    Just like .jpg or .png, there are actual .avif and .webp files.
    They are highly compressed, so file sizes are smaller without losing quality.
*/
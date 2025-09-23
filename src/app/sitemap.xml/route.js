const BASE_URL = "https://drshaziawaghoo.com";

export async function GET() {
  // Static pages
  const staticPages = [
    "",
    "aboutus",
    "specialities",
    "testimonials-media",
    "resources",
    "contactus",
  ];

  // All articles
  const articles = [
    "lepocrasy",
    "harnia",
    "breastcancer",
    "colorectalsurgery",
    "leasersurgary",
    "gisurgery",
    "thyroid",
    "abdonomial",
    "colorectal",
  ];

  // Final articles
  const finalArticles = ["artical1"];

  // Combine all URLs
  const allPages = [
    ...staticPages.map((page) => `${BASE_URL}/${page}`),
    ...articles.map((slug) => `${BASE_URL}/allartical/${slug}`),
    ...finalArticles.map((slug) => `${BASE_URL}/finalartical/${slug}`),
  ];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

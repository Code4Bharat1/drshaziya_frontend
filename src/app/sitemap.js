export default function sitemap() {
  const baseUrl = "https://drshaziawaghoosurgery.com";

  // Static Pages
  const staticPages = [
    "/",
    "/aboutus",
    "/specialities",
    "/testimonials-media",
    "/resources",
    "/contactus",
  ];

  // Dynamic Articles
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

  // Final Articles
  const finalArticles = ["artical1"];

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date().toISOString(),
    })),
    ...articles.map((slug) => ({
      url: `${baseUrl}/allartical/${slug}`,
      lastModified: new Date().toISOString(),
    })),
    ...finalArticles.map((slug) => ({
      url: `${baseUrl}/finalartical/${slug}`,
      lastModified: new Date().toISOString(),
    })),
  ];
}

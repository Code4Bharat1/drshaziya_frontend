import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://drshaziawaghoo.com";

  const urls = [
    { path: "", priority: "1.0" }, // homepage
    { path: "aboutus", priority: "0.9" },
    { path: "specialities", priority: "0.9" },
    { path: "testimonials-media", priority: "0.8" },
    { path: "resources", priority: "0.8" },
    { path: "contactus", priority: "0.8" },
    // Articles
    { path: "allartical/laparoscopy", priority: "0.7" },
    { path: "allartical/harniasurgery", priority: "0.7" },
    { path: "allartical/breastcancer", priority: "0.7" },
    { path: "allartical/colorectalsurgery", priority: "0.7" },
    { path: "allartical/lasersurgery", priority: "0.7" },
    { path: "allartical/gisurgery", priority: "0.7" },
    { path: "allartical/thyroid", priority: "0.7" },
    { path: "allartical/abdominalsurgery", priority: "0.7" },
    { path: "allartical/colorectal", priority: "0.7" },
    { path: "allartical/artical1", priority: "0.7" }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ path, priority }) => `
  <url>
    <loc>${baseUrl}/${path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}

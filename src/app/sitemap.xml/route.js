import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://drshaziawaghoo.com";

  const urls = [
    "", 
    "aboutus", 
    "specialities", 
    "testimonials-media", 
    "resources", 
    "contactus",
    "allartical/laparoscopy",
    "allartical/harniasurgery",
    "allartical/breastcancer",
    "allartical/colorectalsurgery",
    "allartical/lasersurgery",
    "allartical/gisurgery",
    "allartical/thyroid",
    "allartical/abdominalsurgery",
    "allartical/colorectal",
    "allartical/artical1"
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((url) => {
        return `
        <url>
          <loc>${baseUrl}/${url}</loc>
          <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>${url === "" ? "1.0" : "0.8"}</priority>
        </url>`;
      })
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

// Importing the type definition for Next.js metadata routes
import type { MetadataRoute } from "next"

// Exporting the default function to define the robots.txt configuration
export default function robots(): MetadataRoute.Robots {
  return {
    // Define crawling rules for user agents (bots)
    rules: {
      userAgent: "*", // Applies to all web crawlers
      allow: "/",     // Allow access to all pages
    },

    // Link to your sitemap for better indexing by search engines
    sitemap: "https://your-domain.com/sitemap.xml", // Replace with your actual domain
  }
}

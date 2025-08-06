/**
 * Sitemap generation for Next.js using the built-in MetadataRoute type.
 *
 * This function defines the structure of the sitemap for the website.
 * It includes metadata like `lastModified`, `changeFrequency`, and `priority`
 * for each route, which are helpful for SEO and crawling by search engines.
 *
 * @returns {MetadataRoute.Sitemap} An array of objects representing the sitemap entries.
 */
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL of your site – replace this with your actual domain
  const baseUrl = "https://your-domain.com"

  return [
    {
      // Homepage
      url: baseUrl,
      lastModified: new Date(),           // Sets the current date as the last modification date
      changeFrequency: "weekly",          // Suggests how often the page content is likely to change
      priority: 1,                         // Highest priority for crawling (0.0 to 1.0)
    },
    {
      // Features page
      url: `${baseUrl}/features`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      // Contact page
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      // About page
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]
}

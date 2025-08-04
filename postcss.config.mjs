/** 
 * @type {import('postcss-load-config').Config} 
 * PostCSS configuration file using ESM format.
 * This config enables Tailwind CSS as a PostCSS plugin.
 */
const config = {
  plugins: {
    // Include Tailwind CSS as a PostCSS plugin
    tailwindcss: {}, // Uses tailwind.config.ts by default
  },
};

export default config;

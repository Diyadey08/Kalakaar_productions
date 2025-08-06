import type { Config } from "tailwindcss"

// Tailwind CSS configuration object
const config = {
  // Enable dark mode via a specific class on <html> (e.g., <html class="dark">)
  darkMode: ["class"],

  // Paths to all template files where Tailwind classes are used
  content: [
    "./pages/**/*.{ts,tsx}",       // Pages in Next.js project
    "./components/**/*.{ts,tsx}",  // Reusable components
    "./app/**/*.{ts,tsx}",         // App directory (for App Router in Next.js)
    "./src/**/*.{ts,tsx}",         // Source folder (if present)
    "*.{js,ts,jsx,tsx,mdx}",       // Root-level files
  ],

  // Optional prefix for Tailwind utility classes (empty means no prefix)
  prefix: "",

  // Theme customization
  theme: {
    // Container configuration
    container: {
      center: true,       // Center the container
      padding: "2rem",    // Add padding inside container
      screens: {
        "2xl": "1400px",  // Custom container width for 2xl breakpoint
      },
    },

    // Extend the default Tailwind theme
    extend: {
      // Define custom color palette using CSS variables for dynamic theming
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Primary button/brand color
        primary: {
          DEFAULT: "#2465ED",       // Main primary color
          foreground: "#FFFFFF",    // Text/icon color on primary background
        },

        // Secondary color scheme
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        // Error or destructive action colors
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        // Muted text/background styling
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        // Accent elements (e.g., badges or highlights)
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        // Popover backgrounds and content
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        // Card UI components
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      // Custom border-radius values based on CSS variables
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // Define custom keyframes for accordion animations
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },

      // Attach keyframes to named animations
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  // Add third-party Tailwind plugins
  plugins: [
    require("tailwindcss-animate"), // Adds utilities for animations
  ],
} satisfies Config // Ensure the config object satisfies the Tailwind Config type

export default config

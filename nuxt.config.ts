import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "@nuxtjs/i18n", "@nuxtjs/sitemap", "@nuxtjs/robots"],

  ui: {
    global: true,
  },

  css: ["~/assets/styles/main.css", "~/assets/styles/global.scss"],

  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/variables.scss" as *;',
        },
      },
    },
  },

  // SEO Configuration
  app: {
  head: {
    meta: [
      { name: "author", content: "Hanna Kaczyńska" },
      { property: "og:type", content: "website" },
      { property: 'og:site_name', content: 'Hanna Kaczyńska Portfolio' },
    ],
    link: [
      { rel: "canonical", href: process.env.NUXT_PUBLIC_SITE_URL },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  }
  },

  // Sitemap Configuration
  sitemap: {
    hostname: process.env.NUXT_PUBLIC_SITE_URL,
    gzip: true,
    routes: [
      "/",
      "/about",
      "/projects",
      "/contact",
      "/projects/destillapp",
      "/projects/wallet-app",
      "/projects/portfolio",
      "/projects/filmoteka",
      "/projects/icecream-shop",
    ],
  },

  // Robots Configuration
  robots: {
    UserAgent: "*",
    Allow: "/",
    Sitemap: `${process.env.NUXT_PUBLIC_SITE_URL}/sitemap.xml`,
  },

  i18n: {
    defaultLocale: "en",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "pl", name: "Polski", file: "pl.json" },
    ],
    langDir: "locales/",
    strategy: "prefix_except_default",
    detectBrowserLanguage: false,
    seo: true, // Enable SEO for i18n
  },

  runtimeConfig: {
    public: {
      emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      ogImageEn: process.env.NUXT_PUBLIC_OG_IMAGE_EN,
      ogImagePl: process.env.NUXT_PUBLIC_OG_IMAGE_PL,
    },
  },

  // Enable SSG for better SEO
  nitro: {
    prerender: {
      routes: [
        "/",
        "/about",
        "/projects",
        "/contact",
        "/projects/destillapp",
        "/projects/wallet-app",
        "/projects/portfolio",
        "/projects/filmoteka",
        "/projects/icecream-shop",
      ],
    },
  },
});

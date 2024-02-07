import { resolve } from "path";

export default defineNuxtConfig({
  app: {
    head: {
      title: "CSG Интернет магазин",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      script: [
        { src: "https://maps.api.2gis.ru/2.0/loader.js" },
        {
          hid: "gtag",

          innerHtml: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WZM6TM3S');`,

          type: "text/javascript",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          // href: "../assets/img/111(1).png",
        },
      ],
    },
  },

  // router: {
  //   prefetchLinks: false,
  // },

  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: [
    "ant-design-vue/dist/antd.css",
    "~/assets/main.css",
    "~/assets/fonts/stylesheet.css",
  ],
  plugins: [
    { src: "~/plugins/antdv.js" },
    { src: "~/plugins/route.client.js" },
    { src: "~/plugins/facebook-pixel.js", mode: "client" },
  ],
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
    },
  ],
  experimental: {
    componentIslands: true,
  },
  modules: [
    "@sidebase/nuxt-session",
    "@nuxtjs/i18n",
    "@nuxt/devtools",
    [
      "yandex-metrika-module-nuxt3",
      {
        id: "94806976",
        webvisor: true,
        consoleLog: true,
        clickmap: true,
        useCDN: false,
        trackLinks: true,
        accurateTrackBounce: true,
      },
    ],
  ],
  i18n: {
    locales: [
      {
        code: "ru",
        file: "ru.json",
      },
      {
        code: "kz",
        file: "kz.json",
      },
    ],
    lazy: true,
    langDir: "locales",
    defaultLocale: "ru",
  },
  devtools: {
    enabled: true,
  },

  runtimeConfig: {
    public: {
      API_HOST: "",
      API_PORT: "8000",
      API_URL: "",
    },
  },
});

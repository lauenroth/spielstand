// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: { port: 8910 },
  modules: ['@nuxtjs/i18n', '@pinia/nuxt'],
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
});

export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      name: 'English',
    }, {
      code: 'es',
      name: 'Español',
    }],
  },
  llms: {
    domain: 'https://docs.ctlabs.com',
    title: 'Auth Spring Boot Starter',
    description: 'Documentation for Auth Spring Boot Starter'
  },
  content: {
    build: {
      markdown: {
        highlight: {
          langs: [
            'ini',
            'xml',
            'java',
            'groovy',
            'properties',
            'sql'
          ]
        }
      }
    }
  }
})

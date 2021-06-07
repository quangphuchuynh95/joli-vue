import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
  locale: 'en',
  messages: {
    en: {
      test: 'Test message'
    },
    vi: {
      test: 'V test message'
    },
  }
})

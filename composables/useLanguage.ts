import { useI18n } from 'vue-i18n'

export const useLanguage = () => {
  // GLOBAL STATE
  const lang = useState('lang', () => 'en')

  const { setLocale } = useI18n()

  const switchLanguage = (value: 'en' | 'pl') => {
    lang.value = value
    setLocale(value)
  }

  return { lang, switchLanguage }
}
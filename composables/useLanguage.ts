import { useI18n } from 'vue-i18n'

export const useLanguage = () => {
  const { locale, setLocale } = useI18n();

  const lang = useState('lang', () => locale.value as 'en' | 'pl');

  const switchLanguage = (value: 'en' | 'pl') => {
    lang.value = value
    setLocale(value)
  }

  return { lang, switchLanguage }
}
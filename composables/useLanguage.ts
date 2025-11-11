import { useI18n } from 'vue-i18n';

export const useLanguage = () => {
  const { locale, setLocale } = useI18n();

  const switchLanguage = (lang: 'en' | 'pl') => {
    setLocale(lang);
  }

  return { locale, switchLanguage }
}

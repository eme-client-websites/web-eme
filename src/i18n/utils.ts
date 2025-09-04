import en from './en.json';

export const languages = {
  es: 'Español',
  en: 'English'
};

export const defaultLang = 'es';

export const translations = {
  en: en
};

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: string) {
    // Si es español (idioma por defecto), devolver undefined para usar el texto original
    if (lang === 'es') return undefined;
    
    // Para inglés, buscar la traducción
    const keys = key.split('.');
    let translation: any = translations[lang];
    
    for (const k of keys) {
      translation = translation?.[k];
    }
    
    return translation || key;
  }
}

export function getStaticPaths() {
  return [
    { params: { lang: 'es' } },
    { params: { lang: 'en' } }
  ];
}

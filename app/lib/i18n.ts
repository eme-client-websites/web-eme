// Importar las traducciones existentes
import en from '../i18n/en.json';

export const languages = {
  es: 'Español',
  en: 'English'
} as const;

export type Locale = keyof typeof languages;

export const defaultLang: Locale = 'es';

export const translations = {
  en: en
} as const;

export function getLangFromUrl(pathname: string): Locale {
  const pathSegments = pathname.split('/');
  const lang = pathSegments[1];
  if (lang && lang in languages) return lang as Locale;
  return defaultLang;
}

export function useTranslations(lang: Locale) {
  return function t(key: string): string | undefined {
    // Si es español (idioma por defecto), devolver undefined para usar el texto original
    if (lang === 'es') return undefined;
    
    // Para inglés, buscar la traducción
    const keys = key.split('.');
    let translation: unknown = translations[lang];
    
    for (const k of keys) {
      if (typeof translation === 'object' && translation !== null && k in translation) {
        translation = (translation as Record<string, unknown>)[k];
      } else {
        translation = undefined;
        break;
      }
    }
    
    return typeof translation === 'string' ? translation : key;
  }
}

// Función helper para generar rutas estáticas en Next.js
export function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({
    locale: lang
  }));
}

// Helper para obtener metadata por idioma
export function getMetadata(locale: Locale) {
  const isSpanish = locale === 'es';
  
  return {
    title: isSpanish ? 'E-ME - Growth Agency' : 'E-ME - Growth Agency',
    description: isSpanish 
      ? 'Crecemos marcas con estrategia y tecnología' 
      : 'We grow brands with strategy and technology',
  };
}

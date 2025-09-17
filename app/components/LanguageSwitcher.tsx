'use client';

import { type Locale } from '../lib/i18n';

interface LanguageSwitcherProps {
  locale: Locale;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const currentLang = locale;
  const otherLang = currentLang === 'es' ? 'en' : 'es';

  // Construir la URL para el otro idioma
  const getOtherLangUrl = () => {
    if (typeof window === 'undefined') return '/';
    
    const pathname = window.location.pathname;
    
    if (currentLang === 'es') {
      // Si estamos en español, agregar /en al inicio
      return '/en' + pathname;
    } else {
      // Si estamos en inglés, quitar /en del inicio
      return pathname.replace('/en', '') || '/';
    }
  };

  const otherLangUrl = getOtherLangUrl();

  return (
    <div className="hidden lg:block fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 shadow-lg">
        {/* Idioma actual */}
        <div className="flex items-center">
          <span className="text-white font-medium text-sm">
            {currentLang === 'es' ? 'ESP' : 'ENG'}
          </span>
        </div>
        
        <span className="text-white/30 mx-3">|</span>
        
        {/* Idioma alternativo */}
        <a 
          href={otherLangUrl}
          className="hover:scale-110 transition-all duration-300 opacity-60 hover:opacity-100"
        >
          <span className="text-white font-medium text-sm">
            {otherLang === 'es' ? 'ESP' : 'ENG'}
          </span>
        </a>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { type Locale } from '../lib/i18n';

interface MobileHeaderProps {
  locale: Locale;
}

export default function MobileHeader({ locale }: MobileHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerTextColor, setHeaderTextColor] = useState('white');

  // Enlaces del menú - exactamente igual al menú de desktop
  const menuItems = [
    { href: '#servicios', text: locale === 'en' ? 'Services' : 'Servicios' },
    { href: '#proyectos', text: locale === 'en' ? 'Work' : 'Trabajos' },
    { href: '#contacto', text: locale === 'en' ? 'Contact' : 'Contacto' }
  ];

  // Configuración del selector de idioma
  const currentLang = locale;
  const otherLang = currentLang === 'es' ? 'en' : 'es';

  // Construir la URL para el otro idioma
  function getOtherLangUrl() {
    if (typeof window === 'undefined') return '/';
    
    const pathname = window.location.pathname;
    
    if (currentLang === 'es') {
      // Si estamos en español, agregar /en al inicio
      return '/en' + pathname;
    } else {
      // Si estamos en inglés, quitar /en del inicio
      return pathname.replace('/en', '') || '/';
    }
  }

  const otherLangUrl = getOtherLangUrl();

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const handleMenuLinkClick = (href: string) => {
    closeMenu();
    // Pequeño delay para que se vea la animación
    setTimeout(() => {
      if (href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 300);
  };

  // Detectar cambios de color basados en el scroll - sincronizado con ScrollColorEffects
  useEffect(() => {
    const detectHeaderColor = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / documentHeight) * 100;
      
      console.log('MobileHeader - Scroll %:', scrollPercent.toFixed(1));
      
      // Usar exactamente la misma lógica que ScrollColorEffects
      if (scrollPercent <= 8) {
        // Estado 1: fondo gris niebla - texto negro
        setHeaderTextColor('black');
        console.log('MobileHeader: negro sobre gris niebla');
      } else if (scrollPercent <= 20) {
        // Estado 2: fondo azul - texto blanco
        setHeaderTextColor('white');
        console.log('MobileHeader: blanco sobre azul');
      } else if (scrollPercent <= 45) {
        // Estado 3: fondo azul profundo - texto blanco
        setHeaderTextColor('white');
        console.log('MobileHeader: blanco sobre azul profundo');
      } else if (scrollPercent <= 75) {
        // Estado 4: fondo gris niebla - texto negro
        setHeaderTextColor('black');
        console.log('MobileHeader: negro sobre gris niebla');
      } else if (scrollPercent <= 85) {
        // Estado 5: fondo azul - texto blanco
        setHeaderTextColor('white');
        console.log('MobileHeader: blanco sobre azul');
      } else if (scrollPercent <= 95) {
        // Estado 6: fondo azul profundo - texto blanco
        setHeaderTextColor('white');
        console.log('MobileHeader: blanco sobre azul profundo');
      } else {
        // Estado 7: fondo blanco - texto negro
        setHeaderTextColor('black');
        console.log('MobileHeader: negro sobre blanco');
      }
    };

    detectHeaderColor();
    window.addEventListener('scroll', detectHeaderColor);
    
    return () => {
      window.removeEventListener('scroll', detectHeaderColor);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Header móvil - Solo visible en dispositivos móviles */}
      <header className="mobile-header fixed top-0 left-0 right-0 z-50 lg:hidden bg-white/10 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-3">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-emeblanco.svg" alt="E-ME Agency" className="h-8 w-auto" />
            </div>
          </div>

          {/* Selector de idioma y botón hamburguesa */}
          <div className="flex items-center space-x-3">
            {/* Selector de idioma compacto */}
            <div className={`flex items-center justify-center backdrop-blur-sm rounded-full px-3 py-2 h-8 transition-all duration-300 ${
              headerTextColor === 'white' 
                ? 'bg-white/10 border border-white/20' 
                : 'bg-black/10 border border-black/20'
            }`}>
              {/* Idioma actual */}
              <div className="flex items-center justify-center w-4 h-4">
                <span 
                  className="font-medium text-xs leading-none text-center transition-colors duration-300"
                  style={{ color: headerTextColor === 'white' ? '#ffffff' : '#000000' }}
                >
                  {currentLang === 'es' ? 'ES' : 'EN'}
                </span>
              </div>
              
              <div className="flex items-center justify-center w-2 h-4">
                <span 
                  className="text-xs leading-none text-center transition-colors duration-300"
                  style={{ color: headerTextColor === 'white' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)' }}
                >|</span>
              </div>
              
              {/* Idioma alternativo */}
              <a 
                href={otherLangUrl}
                className="hover:scale-110 transition-all duration-300 opacity-60 hover:opacity-100 flex items-center justify-center w-4 h-4"
              >
                <span 
                  className="font-medium text-xs leading-none text-center transition-colors duration-300"
                  style={{ color: headerTextColor === 'white' ? '#ffffff' : '#000000' }}
                >
                  {otherLang === 'es' ? 'ES' : 'EN'}
                </span>
              </a>
            </div>

            {/* Botón hamburguesa */}
            <button 
              onClick={isMenuOpen ? closeMenu : openMenu}
              className="flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none" 
              aria-label="Abrir menú"
            >
              <span 
                className={`w-6 h-0.5 transition-all duration-300 ease-in-out ${
                  isMenuOpen 
                    ? 'transform rotate-45 translate-y-1.5' 
                    : ''
                }`}
                style={{
                  backgroundColor: isMenuOpen 
                    ? '#000000' 
                    : headerTextColor === 'white' ? '#ffffff' : '#000000'
                }}
              />
              <span 
                className={`w-6 h-0.5 transition-all duration-300 ease-in-out ${
                  isMenuOpen 
                    ? 'opacity-0' 
                    : ''
                }`}
                style={{
                  backgroundColor: headerTextColor === 'white' ? '#ffffff' : '#000000'
                }}
              />
              <span 
                className={`w-6 h-0.5 transition-all duration-300 ease-in-out ${
                  isMenuOpen 
                    ? 'transform -rotate-45 -translate-y-1.5' 
                    : ''
                }`}
                style={{
                  backgroundColor: isMenuOpen 
                    ? '#000000' 
                    : headerTextColor === 'white' ? '#ffffff' : '#000000'
                }}
              />
            </button>
          </div>

        </div>
      </header>

      {/* Menú móvil desplegable */}
      <div 
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : 'translate-y-full'
        } ${!isMenuOpen ? 'hidden' : ''}`}
      >
        {/* Header del menú con botón cerrar */}
        <div className="flex justify-between items-center p-4 border-b">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-emeblanco.svg" alt="E-ME Agency" className="h-8 w-auto filter invert" />
          
          {/* Botón X para cerrar */}
          <button 
            onClick={closeMenu}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 dynamic-text transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Contenido del menú optimizado para móvil */}
        <div className="flex flex-col h-full overflow-y-auto">
          
          {/* Enlaces del menú */}
          <div className="flex-1 px-6 py-6">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <button 
                    onClick={() => handleMenuLinkClick(item.href)}
                    className="block text-black hover:text-blue-600 transition-colors duration-300 text-2xl font-bold py-2 border-b border-gray-100 w-full text-left"
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de contacto y redes */}
          <div className="bg-gray-50 px-6 py-6 space-y-4">
            
            {/* Redes sociales */}
            <div>
              <p className="text-xs text-gray-600 mb-3 text-center">Síguenos</p>
              <div className="flex justify-center gap-3">
                <a href="https://instagram.com/eme.agency" target="_blank" className="w-9 h-9 bg-gray-300 hover:bg-blue-500 hover:text-white rounded-full flex items-center justify-center text-black transition-all">
                  <svg className="w-4 h-4 text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.4s-.644-1.44-1.439-1.4z"/>
                  </svg>
                </a>
                <a href="https://facebook.com/eme.agency" target="_blank" className="w-9 h-9 bg-gray-300 hover:bg-blue-500 hover:text-white rounded-full flex items-center justify-center text-black transition-all">
                  <svg className="w-4 h-4 text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/eme_agency" target="_blank" className="w-9 h-9 bg-gray-300 hover:bg-blue-500 hover:text-white rounded-full flex items-center justify-center text-black transition-all">
                  <svg className="w-4 h-4 text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/e-me-agency" target="_blank" className="w-9 h-9 bg-gray-300 hover:bg-blue-500 hover:text-white rounded-full flex items-center justify-center text-black transition-all">
                  <svg className="w-4 h-4 text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://youtube.com/@eme-agency" target="_blank" className="w-9 h-9 bg-gray-300 hover:bg-blue-500 hover:text-white rounded-full flex items-center justify-center text-black transition-all">
                  <svg className="w-4 h-4 text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Información de contacto */}
            <div className="text-center space-y-2">
              <div>
                <p className="text-xs text-gray-600">Consultas</p>
                <p className="font-medium text-xs">info@eme-agency.com</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Teléfono</p>
                <p className="font-medium text-xs">+57 123 456 789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

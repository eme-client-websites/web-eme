'use client';

import { useEffect, useState } from 'react';
import { type Locale } from '../lib/i18n';

interface MenuNavegacionProps {
  locale: Locale;
}

export default function MenuNavegacion({ locale }: MenuNavegacionProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Enlaces del menú simplificado para E-ME
  const menuItems = [
    { href: '#servicios', text: locale === 'en' ? 'Services' : 'Servicios' },
    { href: '#proyectos', text: locale === 'en' ? 'Work' : 'Trabajos' },
    { href: '#contacto', text: locale === 'en' ? 'Contact' : 'Contacto' }
  ];

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Logo arriba del menú */}
      <div className="flex flex-col items-start -mt-[450px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-emeblanco.svg" alt="E-ME Growth Agency" className="h-6 w-auto mb-4" />
        
        {/* Menú de navegación vertical estilo Galileo */}
        <nav className="hero-menu flex flex-col space-y-1">
          {menuItems.map((item) => (
            <a 
              key={item.href}
              href={item.href}
              className="group block text-white/70 hover:text-white transition-all duration-300 text-3xl font-medium text-left"
            >
              <span className="group-hover:translate-x-[-8px] transition-transform duration-300 inline-block">
                {item.text}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* Botón de acceso para móviles/tablets */}
      <div className="xl:hidden fixed bottom-6 right-6 z-50">
        <button 
          onClick={openMobileMenu}
          className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          {locale === 'en' ? 'Client Access' : 'Acceso de Clientes'}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      <div 
        className={`xl:hidden fixed inset-0 backdrop-blur-xl z-[60] transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ backgroundColor: 'rgba(0, 51, 196, 0.95)' }}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeMobileMenu();
        }}
      >
        <div className="flex flex-col justify-center items-center h-full space-y-6">
          <button 
            onClick={closeMobileMenu}
            className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl"
            aria-label="Cerrar menú"
          >
            ×
          </button>
          
          {menuItems.map((item, index) => (
            <a 
              key={item.href}
              href={item.href}
              className="text-white text-xl font-medium hover:text-blue-400 transition-colors duration-300"
              onClick={closeMobileMenu}
              style={{
                animationDelay: `${(index + 1) * 0.1}s`
              }}
            >
              {item.text}
            </a>
          ))}
          
          <div className="mt-8">
            <button 
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              {locale === 'en' ? 'Client Access' : 'Acceso de Clientes'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

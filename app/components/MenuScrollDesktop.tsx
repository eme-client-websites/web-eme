'use client';

import React, { useState, useEffect } from 'react';
import { type Locale } from '../lib/i18n';

interface MenuScrollDesktopProps {
  locale: Locale;
}

export default function MenuScrollDesktop({ locale }: MenuScrollDesktopProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Enlaces del menú
  const menuItems = [
    { href: '#servicios', text: locale === 'en' ? 'Services' : 'Servicios' },
    { href: '#proyectos', text: locale === 'en' ? 'Work' : 'Trabajos' },
    { href: '#contacto', text: locale === 'en' ? 'Contact' : 'Contacto' }
  ];

  // URLs de idioma
  const currentLang = locale;
  const otherLang = currentLang === 'es' ? 'en' : 'es';
  const otherLangUrl = currentLang === 'es' ? '/en' : '/';

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('inicio');
      if (!heroSection) return;

      const heroRect = heroSection.getBoundingClientRect();
      const heroBottom = heroRect.bottom;
      
      // Mostrar controles cuando el hero ya no está visible
      if (heroBottom <= 100) {
        setIsVisible(true);
        detectBackgroundColor();
      } else {
        setIsVisible(false);
        if (isMenuOpen) {
          setIsMenuOpen(false);
          document.body.style.overflow = 'auto';
        }
      }
    };

    const detectBackgroundColor = () => {
      // Usar exactamente la misma lógica que ScrollColorEffects
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / documentHeight) * 100;
      
      console.log('MenuScrollDesktop - Scroll %:', scrollPercent.toFixed(1));
      
      // Usar exactamente la misma lógica que ScrollColorEffects
      if (scrollPercent <= 8) {
        // Estado 1: fondo gris niebla - elementos negros
        setIsDarkMode(true);
        console.log('MenuScrollDesktop: modo negro sobre gris niebla');
      } else if (scrollPercent <= 20) {
        // Estado 2: fondo azul - elementos blancos
        setIsDarkMode(false);
        console.log('MenuScrollDesktop: modo blanco sobre azul');
      } else if (scrollPercent <= 45) {
        // Estado 3: fondo azul profundo - elementos blancos
        setIsDarkMode(false);
        console.log('MenuScrollDesktop: modo blanco sobre azul profundo');
      } else if (scrollPercent <= 75) {
        // Estado 4: fondo gris niebla - elementos negros
        setIsDarkMode(true);
        console.log('MenuScrollDesktop: modo negro sobre gris niebla');
      } else if (scrollPercent <= 85) {
        // Estado 5: fondo azul - elementos blancos
        setIsDarkMode(false);
        console.log('MenuScrollDesktop: modo blanco sobre azul');
      } else if (scrollPercent <= 95) {
        // Estado 6: fondo azul profundo - elementos blancos
        setIsDarkMode(false);
        console.log('MenuScrollDesktop: modo blanco sobre azul profundo');
      } else {
        // Estado 7: fondo blanco - elementos negros
        setIsDarkMode(true);
        console.log('MenuScrollDesktop: modo negro sobre blanco');
      }
    };

    const handleResize = () => {
      const isDesktop = window.innerWidth >= 1280;
      if (!isDesktop && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleKeyDown);

    // Verificar posición inicial
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    document.body.style.overflow = newMenuState ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleLinkClick = () => {
    setTimeout(closeMenu, 300);
  };

  // Clases dinámicas para el modo claro/oscuro
  const buttonClasses = isDarkMode 
    ? 'bg-black/10 border-black/20 hover:bg-black/20'
    : 'bg-white/10 border-white/20 hover:bg-white/20';
  
  const textClasses = isDarkMode ? 'text-black' : 'text-white';
  const lineClasses = isDarkMode ? 'bg-black' : 'bg-white';

  return (
    <>
      {/* Controles del header - Solo desktop */}
      <div className={`hidden xl:flex fixed top-6 right-6 z-[60] items-center space-x-3 transition-all duration-300 ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Selector de idioma compacto */}
        <div className={`flex items-center justify-center backdrop-blur-md border rounded-full px-3 py-2 h-8 transition-all duration-300 ${buttonClasses}`}>
          {/* Idioma actual */}
          <div className="flex items-center justify-center w-4 h-4">
            <span className={`font-medium text-xs leading-none text-center ${textClasses}`}>
              {currentLang === 'es' ? 'ES' : 'EN'}
            </span>
          </div>
          
          <div className="flex items-center justify-center w-2 h-4">
            <span className={`text-xs leading-none text-center ${isDarkMode ? 'text-black/40' : 'text-white/40'}`}>|</span>
          </div>
          
          {/* Idioma alternativo */}
          <a 
            href={otherLangUrl}
            className="hover:scale-110 transition-all duration-300 opacity-60 hover:opacity-100 flex items-center justify-center w-4 h-4"
          >
            <span className={`font-medium text-xs leading-none text-center ${textClasses}`}>
              {otherLang === 'es' ? 'ES' : 'EN'}
            </span>
          </a>
        </div>

        {/* Botón hamburguesa */}
        <button 
          onClick={toggleMenu}
          className={`w-14 h-14 flex flex-col items-center justify-center backdrop-blur-md rounded-full border transition-all duration-300 ${buttonClasses}`}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 transition-all duration-300 transform-gpu ${lineClasses} ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 transition-all duration-300 transform-gpu mt-1 ${lineClasses} ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`w-6 h-0.5 transition-all duration-300 transform-gpu mt-1 ${lineClasses} ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Menú pantalla completa - Solo desktop */}
      <div 
        className={`hidden xl:block fixed inset-0 z-[55] transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        style={{ backgroundColor: '#F1F1F1' }}
        onClick={(e) => e.target === e.currentTarget && closeMenu()}
      >
        {/* Logo en el menú */}
        <div className="absolute top-8 left-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/eme-color.svg" alt="E-ME Growth Agency" className="h-8 w-auto" />
        </div>
        
        {/* Contenido del menú en 2 columnas */}
        <div className="flex h-full">
          {/* Columna izquierda: Navegación */}
          <div className="flex-1 flex flex-col justify-center pl-16">
            <nav>
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <li key={item.href} style={{ animationDelay: `${(index + 1) * 150}ms` }} className={`opacity-0 ${isMenuOpen ? 'animate-slide-in-desktop' : ''}`}>
                    <a 
                      href={item.href}
                      onClick={handleLinkClick}
                      className="group block text-black hover:text-gray-600 transition-all duration-300 text-8xl font-bold leading-none"
                    >
                      <span className="group-hover:translate-x-4 transition-transform duration-300 inline-block">
                        {item.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* Columna derecha: Información de contacto y redes */}
          <div className="flex flex-col justify-center items-end pr-16 space-y-8">
            {/* Redes sociales */}
            <div className={`flex space-x-4 opacity-0 ${isMenuOpen ? 'animate-slide-in-desktop' : ''}`} style={{ animationDelay: '550ms' }}>
              {/* Instagram */}
              <a href="#" className="w-10 h-10 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center text-black transition-colors">
                <svg className="w-5 h-5 dynamic-text transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="w-10 h-10 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center text-black transition-colors">
                <svg className="w-5 h-5 dynamic-text transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-10 h-10 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center text-black transition-colors">
                <svg className="w-5 h-5 dynamic-text transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            
            {/* Información de contacto */}
            <div className={`text-right opacity-0 ${isMenuOpen ? 'animate-slide-in-desktop' : ''}`} style={{ animationDelay: '650ms' }}>
              <div className="text-black text-lg space-y-2">
                <p className="text-sm text-gray-600">(Consultas)</p>
                <p className="font-medium">info@eme-agency.com</p>
                <p className="text-sm text-gray-600 mt-4">(Teléfono)</p>
                <p className="font-medium">+57 123 456 789</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos CSS */}
      <style jsx>{`
        /* Animaciones para el menú desktop */
        @keyframes slideInDesktop {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-in-desktop {
          animation: slideInDesktop 0.6s ease-out forwards;
        }
        
        /* Glassmorphism para el menú */
        #desktop-fullscreen-menu {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        
        /* Efectos de hover en los enlaces del menú */
        nav a:hover {
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </>
  );
}

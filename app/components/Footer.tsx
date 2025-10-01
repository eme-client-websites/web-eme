'use client';

import { type Locale } from '../lib/i18n';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  // Enlaces de navegación - mismos que el menú hamburguesa  
  const navLinks = [
    { href: '#servicios', text: locale === 'en' ? 'Services' : 'Servicios' },
    { href: '#proyectos', text: locale === 'en' ? 'Work' : 'Trabajos' },
    { href: '#contacto', text: locale === 'en' ? 'Contact' : 'Contacto' }
  ];

  // Enlaces sociales - mismos que el menú hamburguesa desktop
  const socialLinks = [
    { href: 'https://instagram.com/eme.agency', name: 'Instagram', icon: 'instagram' },
    { href: 'https://facebook.com/eme.agency', name: 'Facebook', icon: 'facebook' },
    { href: 'https://twitter.com/eme_agency', name: 'X (Twitter)', icon: 'twitter' },
    { href: 'https://linkedin.com/company/e-me-agency', name: 'LinkedIn', icon: 'linkedin' },
    { href: 'https://youtube.com/@eme-agency', name: 'YouTube', icon: 'youtube' }
  ];

  const getSocialIcon = (iconType: string) => {
    switch (iconType) {
      case 'instagram':
        return (
          <svg className="w-8 h-8 lg:w-6 lg:h-6" fill="white" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z"/>
          </svg>
        );
      case 'facebook':
        return (
          <svg className="w-8 h-8 lg:w-6 lg:h-6" fill="white" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-8 h-8 lg:w-6 lg:h-6" fill="white" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-8 h-8 lg:w-6 lg:h-6" fill="white" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'youtube':
        return (
          <svg className="w-8 h-8 lg:w-6 lg:h-6" fill="white" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="relative overflow-hidden footer-custom">
      {/* Container principal */}
      <div className="container-custom relative z-10">
        
        {/* Logo centrado arriba */}
        <div className="flex justify-center pt-16 pb-8">
          <img 
            src="/logo-emeblanco.svg" 
            alt="E-me Growth Agency" 
            className="h-12 lg:h-16 w-auto"
          />
        </div>

        {/* Redes sociales centradas */}
        <div className="flex justify-center pb-12">
          <div className="flex gap-6 justify-center items-center">
            {socialLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 text-white hover:text-gray-300 transition-colors duration-200 flex-shrink-0 social-icon"
                aria-label={link.name}
              >
                {getSocialIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>

        {/* Menú de navegación centrado horizontal */}
        <div className="flex justify-center pb-16">
          <nav className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="text-white hover:text-gray-300 transition-colors duration-200 text-lg lg:text-xl uppercase tracking-wide font-medium footer-link"
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Marquesina grande y prominente */}
      <div className="w-full overflow-hidden marquee-custom-large">
        <div className="marquee">
          <div className="marquee-content">
            <span className="text-8xl lg:text-[12rem] xl:text-[16rem] font-black tracking-wider mx-16 marquee-text">E-ME GROWTH AGENCY</span>
            <span className="text-8xl lg:text-[12rem] xl:text-[16rem] font-black tracking-wider mx-16 marquee-text">DESIGN & DEVELOPMENT</span>
            <span className="text-8xl lg:text-[12rem] xl:text-[16rem] font-black tracking-wider mx-16 marquee-text">E-ME GROWTH AGENCY</span>
            <span className="text-8xl lg:text-[12rem] xl:text-[16rem] font-black tracking-wider mx-16 marquee-text">DESIGN & DEVELOPMENT</span>
          </div>
        </div>
      </div>

      {/* Políticas y copyright al final */}
      <div className="w-full">
        <div className="container-custom py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-gray-300">
                © 2025 E-me Growth Agency. {locale === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
              </p>
            </div>
            
            {/* Políticas */}
            <div className="flex gap-6 text-center lg:text-right">
              <a 
                href="/privacy-policy" 
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                {locale === 'en' ? 'Privacy Policy' : 'Política de Privacidad'}
              </a>
              <a 
                href="/terms-of-service" 
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                {locale === 'en' ? 'Terms of Service' : 'Términos de Servicio'}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos CSS-in-JS */}
      <style jsx>{`
        /* Forzar colores del footer */
        .footer-custom {
          background-color: #030B46 !important;
          color: white !important;
        }
        
        .footer-custom *:not(.marquee-text) {
          color: white !important;
          background-color: transparent !important;
        }
        
        /* Forzar iconos de redes sociales blancos */
        .footer-custom svg {
          color: white !important;
          fill: white !important;
        }
        
        .footer-custom a:hover svg {
          color: #d1d5db !important;
          fill: #d1d5db !important;
        }
        
        /* Estilos específicos para iconos sociales */
        .social-icon svg {
          fill: white !important;
        }
        
        .social-icon:hover svg {
          fill: #d1d5db !important;
        }
        
        .footer-custom .text-gray-300 {
          color: #d1d5db !important;
        }
        
        .footer-custom .text-blue-600 {
          color: #2563eb !important;
        }
        
        .marquee-custom-large {
          background-color: #030B46 !important;
          color: white !important;
        }
        
        .marquee-custom-large * {
          background-color: transparent !important;
        }
        
        .marquee-custom-large *:not(.marquee-text) {
          color: white !important;
        }

        /* Animaciones y efectos */
        .footer-link {
          position: relative;
        }
        
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: currentColor;
          transition: width 0.3s ease;
        }
        
        .footer-link:hover::after {
          width: 100%;
        }
        
        /* Efecto hover en el texto principal */
        .hover-title:hover {
          transform: translateY(-2px);
          transition: transform 0.3s ease;
        }
        
        /* Animación de marquesina */
        .marquee {
          white-space: nowrap;
          overflow: hidden;
          display: flex;
        }
        
        .marquee-content {
          display: flex;
          animation: marquee 40s linear infinite;
          white-space: nowrap;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        /* Marquesina siempre en movimiento - sin pausa en hover */
        
        /* Responsividad mejorada */
        @media (max-width: 1023px) {
          .lg\\:text-right {
            text-align: center;
          }
          
          .lg\\:justify-end {
            justify-content: center;
          }
          
          .lg\\:flex-row {
            flex-direction: column;
          }
          
          .marquee-text {
            font-size: 6rem !important;
            margin: 0 3rem;
          }
        }
        
        @media (max-width: 640px) {
          .marquee-content {
            animation-duration: 30s;
          }
          
          .marquee-text {
            font-size: 3.5rem !important;
            margin: 0 2rem;
          }
          
          /* Ajustar espaciado en móvil */
          .container-custom {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        /* Mejoras en la tipografía y transparencia */
        .footer-custom .marquee-text {
          font-feature-settings: 'kern' 1, 'liga' 1;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #0043FF !important;
          opacity: 0.1 !important;
          transition: opacity 0.3s ease;
        }
        
        .footer-custom .marquee:hover .marquee-text {
          opacity: 0.15 !important;
        }
        
        /* Efectos adicionales para enlaces */
        .footer-link:hover {
          transform: translateY(-1px);
        }
      `}</style>
    </footer>
  );
}


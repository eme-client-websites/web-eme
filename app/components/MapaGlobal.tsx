'use client';

import { useEffect } from 'react';
import { type Locale } from '../lib/i18n';

interface MapaGlobalProps {
  locale: Locale;
}

export default function MapaGlobal({ locale: _locale }: MapaGlobalProps) {
  useEffect(() => {

    // Función para obtener el color de fondo actual del body
    const getCurrentBodyColor = (): string => {
      const bodyStyle = window.getComputedStyle(document.body);
      const bgColor = bodyStyle.backgroundColor;
      
      // Convertir RGB/RGBA a hex si es necesario
      if (bgColor.startsWith('rgb')) {
        const matches = bgColor.match(/\d+/g);
        if (matches && matches.length >= 3) {
          const r = parseInt(matches[0] || '0');
          const g = parseInt(matches[1] || '0');
          const b = parseInt(matches[2] || '0');
          return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        }
      }
      
      // Fallback al color por defecto
      return '#F1F1F1';
    };

    const updateGradientColors = () => {
      // Esperar a que ScrollColorEffects haya actualizado el color del body
      const currentBodyColor = getCurrentBodyColor();
      
      // Actualizar los degradados con el color actual del body
      const topGradient = document.getElementById('mapa-gradient-top');
      const bottomGradient = document.getElementById('mapa-gradient-bottom');
      
      if (topGradient && currentBodyColor) {
        const r = parseInt(currentBodyColor.slice(1, 3), 16);
        const g = parseInt(currentBodyColor.slice(3, 5), 16);
        const b = parseInt(currentBodyColor.slice(5, 7), 16);
        
        topGradient.style.background = `linear-gradient(to bottom, ${currentBodyColor} 0%, ${currentBodyColor} 8%, rgba(${r}, ${g}, ${b}, 0.9) 20%, rgba(${r}, ${g}, ${b}, 0.6) 50%, rgba(${r}, ${g}, ${b}, 0.2) 80%, transparent 100%)`;
      }
      
      if (bottomGradient && currentBodyColor) {
        const r = parseInt(currentBodyColor.slice(1, 3), 16);
        const g = parseInt(currentBodyColor.slice(3, 5), 16);
        const b = parseInt(currentBodyColor.slice(5, 7), 16);
        
        bottomGradient.style.background = `linear-gradient(to top, ${currentBodyColor} 0%, ${currentBodyColor} 8%, rgba(${r}, ${g}, ${b}, 0.9) 20%, rgba(${r}, ${g}, ${b}, 0.6) 50%, rgba(${r}, ${g}, ${b}, 0.2) 80%, transparent 100%)`;
      }
    };
    
    // Esperar un delay más largo para asegurar que ScrollColorEffects se haya inicializado completamente
    const timer = setTimeout(() => {
      updateGradientColors();
    }, 300);
    
    // Debounce para evitar actualizaciones demasiado frecuentes
    let debounceTimer: NodeJS.Timeout;
    const debouncedUpdate = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(updateGradientColors, 150);
    };

    // También observar cambios en el body para reaccionar a ScrollColorEffects
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && 
            (mutation.attributeName === 'style' || mutation.attributeName === 'data-color')) {
          debouncedUpdate();
        }
      });
    });
    
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['style', 'data-color']
    });
    
    window.addEventListener('scroll', updateGradientColors);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(debounceTimer);
      observer.disconnect();
      window.removeEventListener('scroll', updateGradientColors);
    };
  }, []);
  return (
    <section className="relative py-32 md:py-48 lg:py-56 xl:py-64 overflow-hidden min-h-screen" style={{ background: 'transparent' }}>
      {/* Mapa del mundo como fondo */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/mapworld.svg" 
          alt="Mapa del mundo" 
          className="w-full h-full object-cover opacity-80 scale-110"
        />
      </div>
      
      {/* Degradados dinámicos para eliminar cortes entre secciones */}
      <div className="absolute top-0 left-0 w-full h-40 z-20 pointer-events-none">
        <div 
          id="mapa-gradient-top"
          className="w-full h-full opacity-95"
          style={{
            background: 'linear-gradient(to bottom, #F1F1F1 0%, #F1F1F1 8%, rgba(241, 241, 241, 0.9) 20%, rgba(241, 241, 241, 0.6) 50%, rgba(241, 241, 241, 0.2) 80%, transparent 100%)',
            transition: 'background 2.5s ease-in-out'
          }}
        ></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-40 z-20 pointer-events-none">
        <div 
          id="mapa-gradient-bottom"
          className="w-full h-full opacity-95"
          style={{
            background: 'linear-gradient(to top, #F1F1F1 0%, #F1F1F1 8%, rgba(241, 241, 241, 0.9) 20%, rgba(241, 241, 241, 0.6) 50%, rgba(241, 241, 241, 0.2) 80%, transparent 100%)',
            transition: 'background 2.5s ease-in-out'
          }}
        ></div>
      </div>
      
      {/* Efectos de fondo geométricos */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rotate-45"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-white/20 rotate-12"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-white/20 rotate-45"></div>
      </div>
      
      {/* Contenido principal */}
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Grid horizontal de contadores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
            {/* Contador Proyectos */}
            <div className="contador-card group text-center">
              <div className="mb-4">
                <div className="relative flex justify-center">
                  <span className="contador-numero text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black dynamic-text leading-none transition-colors duration-300">
                    370
                  </span>
                  <span className="absolute left-0.5 top-1 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black dynamic-text transition-colors duration-300">+</span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold dynamic-text leading-tight mb-2 transition-colors duration-300 text-center">
                  Proyectos
                </h3>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal dynamic-text opacity-70 transition-colors duration-300 text-center">
                  Marketing y Desarrollo
                </p>
              </div>
            </div>

            {/* Contador Años */}
            <div className="contador-card group text-center">
              <div className="mb-4">
                <div className="relative flex justify-center">
                  <span className="contador-numero text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black dynamic-text leading-none transition-colors duration-300">
                    10
                  </span>
                  <span className="absolute left-1 top-1 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black dynamic-text transition-colors duration-300">+</span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold dynamic-text leading-tight mb-2 transition-colors duration-300 text-center">
                  Años
                </h3>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal dynamic-text opacity-70 transition-colors duration-300 text-center">
                  De experiencia
                </p>
              </div>
            </div>

            {/* Contador Clientes */}
            <div className="contador-card group text-center">
              <div className="mb-4">
                <div className="relative flex justify-center">
                  <span className="contador-numero text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black dynamic-text leading-none transition-colors duration-300">
                    183
                  </span>
                  <span className="absolute left-0.5 top-1 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black dynamic-text transition-colors duration-300">+</span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold dynamic-text leading-tight mb-2 transition-colors duration-300 text-center">
                  Clientes
                </h3>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal dynamic-text opacity-70 transition-colors duration-300 text-center">
                  Nacionales e Internacionales
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Efectos de partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full opacity-40 animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-white rounded-full opacity-30 animate-ping" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Estilos CSS */}
      <style jsx>{`
        /* Efecto de brillo en el texto */
        .contador-numero, h3 {
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }
        
        /* Estilos para las tarjetas de contador */
        .contador-card {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Estilo básico para los números */
        .contador-numero {
          position: relative;
          letter-spacing: -0.02em;
          font-feature-settings: 'tnum', 'lnum';
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .contador-card {
            padding: 1rem;
          }
          .contador-numero {
            font-size: 3rem;
            line-height: 0.9;
          }
          h3 {
            font-size: 1.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .contador-numero {
            font-size: 2.5rem;
          }
          h3 {
            font-size: 1.25rem;
          }
        }

        /* Asegurar que el texto se vea limpio */
        .contador-card * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </section>
  );
}

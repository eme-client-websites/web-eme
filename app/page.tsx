'use client';

import { defaultLang } from './lib/i18n';
import { useTranslations } from './lib/i18n';
import MenuNavegacion from './components/MenuNavegacion';
import ScrollColorEffects from './components/ScrollColorEffects';
import MobileHeader from './components/MobileHeader';
import Contadores from './components/Contadores';
import Servicios from './components/Servicios';
import Proyectos from './components/Proyectos';
import ClientesShowcase from './components/ClientesShowcase';
import PartnersShowcase from './components/PartnersShowcase';
import Equipo from './components/Equipo';
import MapaGlobal from './components/MapaGlobal';
import MenuScrollDesktop from './components/MenuScrollDesktop';
// import LanguageSwitcher from './components/LanguageSwitcher';
import Footer from './components/Footer';
import HeroDaniel from './components/HeroDaniel';

export default function HomePage() {
  const t = useTranslations(defaultLang);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <ScrollColorEffects />
      
      {/* Header móvil */}
      <MobileHeader locale={defaultLang} />
      
      {/* Navegación */}
      <nav className="absolute top-0 w-full bg-transparent z-20">
        <div className="container-custom">
          <div className="flex justify-between items-center h-16">
          </div>
        </div>
      </nav>

      {/* Hero Section Original */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/fondohero.jpg" alt="Hero Background" className="w-full h-full object-cover" />
          {/* Overlay oscuro para legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>
        
        {/* Efectos de luz sutiles sobre la imagen */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0043FF] rounded-full mix-blend-screen filter blur-3xl opacity-5 z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0033C4] rounded-full mix-blend-screen filter blur-3xl opacity-5 z-10"></div>
        
        {/* Efecto de luz central sutil */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#0043FF] to-[#0033C4] rounded-full mix-blend-screen filter blur-2xl opacity-3 z-10"></div>
        
        <div className="relative z-20 flex items-center h-full w-full px-0">
          {/* Columna izquierda: Contenido principal (70%) */}
          <div className="w-full md:w-[70%] text-left px-4 md:pl-[40px] md:pr-0">
            {/* Título principal */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-none -mt-80 uppercase text-left">
              {t('hero.title') || 'CRECEMOS MARCAS CON'}
              <br />
              <span className="text-white">
                {t('hero.titleHighlight') || ' ESTRATEGIA Y TECNOLOGÍA'}
              </span>
            </h1>
            
            {/* Botón Let's talk */}
            <div className="mt-8">
              <a 
                href={defaultLang === 'en' ? '/en/contact' : '/contacto'}
                className="group inline-flex items-center bg-[#FFEA1F] hover:bg-[#FFE500] text-[#030B46] font-bold text-[16px] font-medium uppercase px-6 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 xl:text-[1.14rem]"
              >
                HABLEMOS
                <svg width="20" height="20" className="ml-2 fill-[#030B46] transition-all duration-300 ease-in-out group-hover:md:ml-3" data-icon="arrow">
                  <g>
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.8457 12L8.85393 1.63591L10.4311 0L22 12L10.4311 24L8.85393 22.3641L18.8457 12Z"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 10.8431H20.4235V13.1566H0V10.8431Z"></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Columna derecha: Menú de navegación (35%) */}
          <div className="w-[35%] hidden xl:flex flex-col justify-center items-end pr-8 mt-16">
            <MenuNavegacion locale={defaultLang} />
          </div>
        </div>
        
        {/* Scroll Indicator Premium */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer group" 
          onClick={() => scrollToSection('contadores')}
        >
          <div className="flex flex-col items-center space-y-3">
            {/* Contenedor del scroll indicator */}
            <div className="relative w-8 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 group-hover:border-white/40 transition-all duration-300 flex items-start justify-center">
              {/* Bolita animada dentro */}
              <div className="absolute top-3 w-3 h-3 bg-white rounded-full scroll-dot shadow-lg"></div>
            </div>
            
            {/* Flecha minimalista */}
            <div className="text-white/30 group-hover:text-white/50 transition-colors duration-300">
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contadores */}
      <div id="contadores">
        <Contadores locale={defaultLang} />
      </div>

      {/* Mapa Global con estadísticas */}
      <MapaGlobal locale={defaultLang} />
      
      {/* Sección de Servicios */}
      <div id="servicios">
        <Servicios locale={defaultLang} />
      </div>

      {/* Sección de Proyectos */}
      <div id="proyectos">
        <Proyectos locale={defaultLang} />
      </div>

      {/* Showcase de Clientes */}
      <ClientesShowcase locale={defaultLang} />

      {/* Sección del Equipo */}
      <div id="equipo">
        {/* <Equipo locale={defaultLang} /> - OCULTO */}
        
        {/* Hero Daniel Section */}
        <HeroDaniel locale={defaultLang} />
      </div>

      {/* Sección de Partners */}
      <PartnersShowcase locale={defaultLang} />
      
      {/* Footer */}
      <Footer locale={defaultLang} />
      
      {/* Menú de scroll para desktop */}
      <MenuScrollDesktop locale={defaultLang} />
      
      {/* Selector de idioma - Oculto */}
      {/* <LanguageSwitcher locale={defaultLang} /> */}
    </>
  );
}

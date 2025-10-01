'use client';

import { useTranslations, type Locale } from '../lib/i18n';
import { useState, useEffect, useRef } from 'react';
import TestimonialSection from './TestimonialSection';

interface ProyectosProps {
  locale: Locale;
}

interface Proyecto {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  link: string;
  servicios: string[];
  detalles: {
    descripcionCompleta: string;
    rol: string;
    solucion: string;
    creditos: string;
    duracion: string;
    website: string;
    testimonio: {
      nombre: string;
      cargo: string;
      imagen: string;
      texto: string;
    };
  };
}

export default function Proyectos({ locale }: ProyectosProps) {
  const t = useTranslations(locale);
  const [selectedProject, setSelectedProject] = useState<Proyecto | null>(null);
  const [modalClosing, setModalClosing] = useState(false);
  const [modalSlideUp, setModalSlideUp] = useState(0); // 0 = normal, 1-100 = porcentaje de subida
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Datos de proyectos - versión simplificada con los principales
  const proyectos = [
    {
      id: 'apparta',
      nombre: t('projects.items.0.name') || 'Apparta',
      descripcion: t('projects.items.0.description') || 'Donde las reservas digitales encuentran la simplicidad visual.',
      imagen: '/Apparta.webp',
      link: '/proyectos/apparta',
      servicios: ['UI/UX', 'Desarrollo', 'Branding'],
      detalles: {
        descripcionCompleta: 'Boa Concept is an innovative player and specialist in intralogistics, offering modular and interconnected solutions. The company is listed on the Paris Stock Exchange on the Euronext Growth market. Boa Concept and Spaag asked LEOLEO to redesign their website.',
        rol: 'Art Direction / UX-UI / Copywriting / Development',
        solucion: 'Prismic / Vercel / Rive',
        creditos: 'In partnership with Spaag',
        duracion: '3 months',
        website: 'https://boa-concept.com',
        testimonio: {
          nombre: 'Pauline Jurado',
          cargo: 'Marketing Director',
          imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face',
          texto: 'Un equipo de ensueño! Estoy emocionada con nuestra colaboración con el estudio E-me. El equipo es tan creativo como excelente para trabajar. Abordamos un gran desafío en tiempo récord, todo mientras manteníamos una energía increíble, gran comunicación y verdadera atención. Lo clavaron en todo momento. ¡Gracias, equipo!'
        }
      }
    },
    {
      id: 'levelup',
      nombre: 'LevelUp',
      descripcion: 'Marketplace premium de productos THCA donde innovación y calidad se encuentran.',
      imagen: '/levelupshop.jpeg',
      link: '/proyectos/levelup',
      servicios: ['Branding', 'Website', 'E-commerce', 'UI/UX'],
      detalles: {
        descripcionCompleta: 'LevelUp is a premium marketplace for innovative cannabis products, connecting businesses and consumers through cutting-edge technology. The platform revolutionizes how users discover and purchase quality products.',
        rol: 'Brand Strategy / Web Design / E-commerce Development',
        solucion: 'Shopify Plus / React / Node.js',
        creditos: 'In partnership with E-me Studio',
        duracion: '6 months',
        website: 'https://levelup-marketplace.com',
        testimonio: {
          nombre: 'Pauline Jurado',
          cargo: 'Marketing Director',
          imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face',
          texto: 'Un equipo de ensueño! Estoy emocionada con nuestra colaboración con el estudio E-me. El equipo es tan creativo como excelente para trabajar. Abordamos un gran desafío en tiempo récord, todo mientras manteníamos una energía increíble, gran comunicación y verdadera atención. Lo clavaron en todo momento. ¡Gracias, equipo!'
        }
      }
    },
    {
      id: 'amalfi',
      nombre: 'Amalfi',
      descripcion: 'Estrategia de redes sociales que transporta los sabores de Italia a cada post.',
      imagen: '/amalfi.jpg',
      link: '/proyectos/amalfi',
      servicios: ['RRSS', 'Branding', 'Content Creation', 'Photography'],
      detalles: {
        descripcionCompleta: 'Amalfi is an authentic Italian restaurant that needed a complete digital transformation. We created a cohesive brand identity that captures the essence of traditional Italian cuisine while appealing to modern audiences.',
        rol: 'Brand Identity / Social Media / Photography / Content Creation',
        solucion: 'Instagram / TikTok / Adobe Creative Suite',
        creditos: 'In partnership with E-me Studio',
        duracion: '4 months',
        website: 'https://amalfi-restaurant.com',
        testimonio: {
          nombre: 'Pauline Jurado',
          cargo: 'Marketing Director',
          imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face',
          texto: 'Un equipo de ensueño! Estoy emocionada con nuestra colaboración con el estudio E-me. El equipo es tan creativo como excelente para trabajar. Abordamos un gran desafío en tiempo récord, todo mientras manteníamos una energía increíble, gran comunicación y verdadera atención. Lo clavaron en todo momento. ¡Gracias, equipo!'
        }
      }
    },
    {
      id: 'quirylaser',
      nombre: 'Quirulaser',
      descripcion: 'Desarrollo personalizado que revoluciona la gestión de citas médicas especializadas.',
      imagen: '/quirulaser.jpeg',
      link: '/proyectos/quirylaser',
      servicios: ['Desarrollo Personalizado', 'UI/UX', 'Backend', 'Mobile App'],
      detalles: {
        descripcionCompleta: 'Quirulaser is a specialized medical clinic focused on laser treatments and aesthetic dermatology. We developed a comprehensive digital solution to streamline their appointment management and enhance patient experience.',
        rol: 'Full-Stack Development / UI/UX Design / System Architecture',
        solucion: 'React / Node.js / PostgreSQL / AWS',
        creditos: 'In partnership with E-me Studio',
        duracion: '8 months',
        website: 'https://quirylaser-system.com',
        testimonio: {
          nombre: 'Pauline Jurado',
          cargo: 'Marketing Director',
          imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face',
          texto: 'Un equipo de ensueño! Estoy emocionada con nuestra colaboración con el estudio E-me. El equipo es tan creativo como excelente para trabajar. Abordamos un gran desafío en tiempo récord, todo mientras manteníamos una energía increíble, gran comunicación y verdadera atención. Lo clavaron en todo momento. ¡Gracias, equipo!'
        }
      }
    },
    {
      id: 'carnessantacruz',
      nombre: 'Carnes Santa Cruz',
      descripcion: 'E-commerce premium que conecta tradición cárnica con tecnología moderna.',
      imagen: '/santacruz.webp',
      link: '/proyectos/carnessantacruz',
      servicios: ['E-commerce', 'Web Design', 'Branding', 'Marketing Digital'],
      detalles: {
        descripcionCompleta: 'Carnes Santa Cruz is a premium meat distributor with decades of family tradition. We created a modern e-commerce platform that honors their heritage while providing customers with an exceptional online shopping experience.',
        rol: 'E-commerce Development / Brand Strategy / UX Design',
        solucion: 'WooCommerce / WordPress / Stripe / Custom API',
        creditos: 'In partnership with E-me Studio',
        duracion: '5 months',
        website: 'https://carnessantacruz.com',
        testimonio: {
          nombre: 'Pauline Jurado',
          cargo: 'Marketing Director',
          imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face',
          texto: 'Un equipo de ensueño! Estoy emocionada con nuestra colaboración con el estudio E-me. El equipo es tan creativo como excelente para trabajar. Abordamos un gran desafío en tiempo récord, todo mientras manteníamos una energía increíble, gran comunicación y verdadera atención. Lo clavaron en todo momento. ¡Gracias, equipo!'
        }
      }
    }
  ];

  const openProjectModal = (proyecto: Proyecto) => {
    setSelectedProject(proyecto);
    setModalSlideUp(0); // Resetear la animación de subida
  };

  const closeProjectModal = () => {
    setModalClosing(true);
    // Agregar una pequeña animación antes de cerrar
    setTimeout(() => {
      setSelectedProject(null);
      setModalClosing(false);
      setModalSlideUp(0);
    }, 300);
  };

  // Manejar la tecla Escape para cerrar el modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedProject) {
        closeProjectModal();
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleEscape);
      // Prevenir scroll en el body cuando el modal está abierto
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Manejar el scroll y wheel para subir gradualmente el modal al llegar al final
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current || !selectedProject) return;

      const container = scrollContainerRef.current;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      
      const maxScroll = scrollHeight - clientHeight;
      const scrollFromBottom = maxScroll - scrollTop;
      
      // Detectar si está en el final real del contenido
      const isAtRealEnd = scrollFromBottom <= 5; // 5px de tolerancia
      
      if (!isAtRealEnd) {
        // No está en el final, resetear todo
        setModalSlideUp(0);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!scrollContainerRef.current || !selectedProject) return;

      const container = scrollContainerRef.current;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      
      const maxScroll = scrollHeight - clientHeight;
      const scrollFromBottom = maxScroll - scrollTop;
      const isAtRealEnd = scrollFromBottom <= 5;

      // Solo procesar scroll virtual si está en el final Y scrolleando hacia abajo
      if (isAtRealEnd && e.deltaY > 0) {
        e.preventDefault(); // Prevenir scroll real

        // Calcular progreso basado en la velocidad del scroll
        const scrollSensitivity = 0.1;
        const progress = Math.min(1, e.deltaY * scrollSensitivity);
        
        // Subir modal gradualmente
        const currentSlide = modalSlideUp;
        const newSlide = Math.max(-100, currentSlide - (progress * 10));
        setModalSlideUp(newSlide);
        
        // Cerrar cuando esté muy arriba
        if (newSlide <= -80) {
          setTimeout(() => {
            closeProjectModal();
          }, 200);
        }
      }
    };

    if (selectedProject && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.addEventListener('scroll', handleScroll, { passive: true });
      container.addEventListener('wheel', handleWheel, { passive: false });
      
      return () => {
        container.removeEventListener('scroll', handleScroll);
        container.removeEventListener('wheel', handleWheel);
      };
    }
  }, [selectedProject, modalSlideUp]);

  return (
    <>
      {/* Título de la sección */}
      <section className="xl:pt-32 relative overflow-hidden" style={{ background: 'transparent' }} data-active="true" data-color="#FFFFFF">
        {/* Efectos de luz de fondo */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0043FF] rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0033C4] rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>

        <div className="container-custom relative z-10">
          <div className="pt-20 xl:pt-[8rem]">
            <div className="flex flex-wrap justify-between xl:flex-nowrap xl:gap-x-[5rem]">
              <div className="w-full lg:w-1/2">
                <h2 className="text-5xl lg:text-7xl font-bold dynamic-text leading-tight tracking-tight max-w-lg transition-colors duration-300">
                  {locale === 'en' ? (
                    <>
                      Un sneak peak de<br />
                      nuestros proyectos...
                    </>
                  ) : (
                    <>
                      Un sneak peak de<br />
                      nuestros proyectos...
                    </>
                  )}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de proyectos */}
      <section data-active="false" data-color="#FFFFFF" className="pb-20 lg:pt-52 xl:pb-40 xl:pt-20" style={{ background: 'transparent' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-10 lg:gap-20 xl:gap-12">
            <div className="space-y-10 lg:space-y-0 mt-10 lg:mt-[-20rem]">
              {proyectos.map((proyecto, index) => (
                <div key={proyecto.id} className="relative flex w-full items-center">
                  <div className="absolute -top-1/2 w-full"></div>
                  <div className={`flex w-full gap-x-10 xl:gap-x-16 opacity-100 transform-none ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}>
                    <div className="hidden w-full lg:flex lg:w-1/2"></div>
                    <div className="relative z-10 w-full lg:w-1/2">
                      <div className="w-full text-left cursor-pointer group relative" onClick={() => openProjectModal(proyecto)}>
                        <div className="aspect-square w-full relative">
                          <div className="flex w-full items-center justify-center">
                            <div className="w-full">
                              <div className="w-full rounded-3xl overflow-hidden relative">
                                <div className="w-full rounded-3xl overflow-hidden">
                                  <div className="aspect-square h-full w-full overflow-hidden rounded-3xl">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img 
                                      src={proyecto.imagen} 
                                      alt={proyecto.nombre} 
                                      className={`w-full h-full rounded-3xl object-cover ${
                                        proyecto.id === 'quirylaser' ? 'object-left-top' : ''
                                      }`} 
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Botón estilo exacto del ejemplo */}
                          <div className="absolute bottom-3 left-3">
                            <div className="bg-white rounded-2xl px-5 py-3 flex items-center space-x-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                              {/* Texto del proyecto */}
                              <div className="text-black font-medium text-base">
                                {proyecto.nombre}
                              </div>
                              {/* Icono con fondo negro en hover */}
                              <div className="relative w-6 h-6 flex items-center justify-center">
                                {/* Fondo negro con animación suave */}
                                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#0033C4' }}></div>
                                {/* Flecha */}
                                <svg className="relative w-4 h-4 text-black group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M7 11.5H17.0635M17.0635 11.5L12.5635 7M17.0635 11.5L12.5635 16"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className="sr-only">Ver detalles sobre {proyecto.nombre}</span>
                      </div>
                      <div className="bottom-0 pt-8 lg:absolute lg:translate-y-full lg:pt-6">
                        <button className="w-full text-left" onClick={() => openProjectModal(proyecto)}>
                          <h2 className="flex flex-wrap gap-x-2 xl:gap-x-2 text-4xl xl:text-5xl font-bold dynamic-text transition-colors duration-300" style={{ color: 'rgb(0, 0, 0)' }}>
                            {proyecto.nombre === 'Carnes Santa Cruz' ? (
                              <>
                                <div className="inline-flex w-auto opacity-100 transform-none">Carnes</div>
                                <div className="inline-flex w-auto opacity-100 transform-none">Santa</div>
                                <div className="inline-flex w-auto opacity-100 transform-none">Cruz</div>
                              </>
                            ) : (
                              <div className="inline-flex w-auto opacity-100 transform-none">{proyecto.nombre}</div>
                            )}
                          </h2>
                          <span className="sr-only">Ver detalles sobre {proyecto.nombre}</span>
                          <p className="pt-2 dynamic-text opacity-70 xl:pt-2 opacity-100 transform-none text-lg transition-colors duration-300" style={{ color: 'rgb(0, 0, 0)' }}>
                            {proyecto.descripcion}
                          </p>
                          <div className="flex flex-wrap gap-3 pt-4 xl:pt-3">
                            {proyecto.servicios.map((servicio) => (
                              <div key={servicio} className="inline-block overflow-hidden opacity-100 transform-none">
                                <div className="project-tag px-4 py-2 text-sm font-normal rounded-lg transition-all duration-300">
                                  <span className="inline-block opacity-100 transform-none" style={{ color: 'white !important' }}>{servicio}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enlace para ver más trabajos */}
          <div className="w-full pt-32 md:pt-40 lg:pt-52 xl:pt-64">
            <a href="/proyectos" className="group relative inline-flex items-center bg-[#0043FF] text-white font-bold text-[20px] font-medium uppercase transition-all duration-300 ease-in-out xl:text-[1.46rem] hover:bg-[#0033C4] px-8 py-4 rounded-lg">
              Explora nuestro portafolio
              <svg width="24" height="24" className="ml-2 fill-white transition-all duration-300 ease-in-out group-hover:md:ml-4" data-icon="arrow">
                <g>
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.8457 12L8.85393 1.63591L10.4311 0L22 12L10.4311 24L8.85393 22.3641L18.8457 12Z"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 10.8431H20.4235V13.1566H0V10.8431Z"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Modal para mostrar detalles del proyecto */}
      {selectedProject && (
        <div 
          className={`c-project fixed inset-0 z-50 transition-opacity duration-300 ${modalClosing ? 'opacity-0' : 'opacity-100'}`}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
        >
            {/* Progress bar */}
            <div className="c-project__progress"></div>
            
            {/* Modal wrapper */}
            <div 
              className="c-project__wrapper relative" 
              style={{ 
                transform: modalSlideUp !== 0 ? `translateY(${modalSlideUp}%)` : 'translate(0px, 0px)',
                transition: modalSlideUp !== 0 ? 'transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
              }}
            >
            
            {/* Scroll container */}
            <div className="c-project__scroll-outer lenis" ref={scrollContainerRef}>
              <div className="c-project__scroll-inner">
                <div className="c-project__contentwrapper">
                  {/* Overlay interno para cerrar modal al hacer click */}
                  <div 
                    className="absolute inset-0 z-0 cursor-pointer"
                    onClick={closeProjectModal}
                    style={{ backgroundColor: 'transparent' }}
                  ></div>
                  
                  <div className="c-project-content relative z-10">
                    <div className="c-project-content__inner">
                      
                      {/* Project header */}
                      <section className="s-projectheader">
                        {/* Close button */}
                        <button 
                          className="c-cta-close s-projectheader__close"
                          onClick={closeProjectModal}
                          style={{ clipPath: 'inset(0% round 0.694444vw)' }}
                        >
                          <div className="c-cta-close__bg"></div>
                          <div className="c-cta-close__bg2"></div>
                          <svg 
                            className="c-cta-close__svg" 
                            viewBox="0 0 46 46" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M18 18L23 23M28 28L23 23M23 23L28 18M23 23L18 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </button>

                        {/* Header wrapper */}
                        <div className="s-projectheader__wrapper">
                          
                          {/* Header top row with tags, title and button */}
                          <div className="s-projectheader__top-row">
                            {/* Tags */}
                            <div className="s-projectheader__tags">
                              {selectedProject.servicios.slice(0, 2).map((servicio: string, index: number) => (
                                <div key={index} className="c-a-minitag s-projectheader__tags-item">
                                  <div style={{ position: 'relative', display: 'inline-block' }}>
                                    {servicio.split('').map((char: string, charIndex: number) => (
                                      <div 
                                        key={charIndex}
                                        style={{ 
                                          position: 'relative', 
                                          display: 'inline-block', 
                                          opacity: 1, 
                                          visibility: 'inherit' 
                                        }}
                                      >
                                        {char.toUpperCase()}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Title */}
                            <div className="s-projectheader__title">
                              <div className="c-a-h2">
                                <div>
                                  <div style={{ 
                                    display: 'block', 
                                    textAlign: 'start', 
                                    position: 'relative', 
                                    transform: 'translate(0px, 0%)' 
                                  }}>
                                    {selectedProject.nombre}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Visit website button */}
                            {selectedProject.detalles.website && (
                              <a 
                                href={selectedProject.detalles.website} 
                                rel="noopener noreferrer" 
                                target="_blank" 
                                className="c-cta-simple s-projectheader__cta"
                              >
                                <div 
                                  className="c-cta-simple__bg" 
                                  style={{ transform: 'translate(0px, 0%)' }}
                                ></div>
                                <div className="bold c-a-cta c-cta-simple__content">
                                  <div style={{ position: 'relative', display: 'inline-block' }}>
                                    {['V', 'i', 's', 'i', 't'].map((char: string, index: number) => (
                                      <div 
                                        key={index}
                                        style={{ 
                                          position: 'relative', 
                                          display: 'inline-block', 
                                          opacity: 1, 
                                          transform: 'translate(0px, 0%)' 
                                        } as React.CSSProperties}
                                        className="char"
                                        data-char={char}
                                      >
                                        {char}
                                      </div>
                                    ))}
                                  </div>
                                  {' '}
                                  <div style={{ position: 'relative', display: 'inline-block' }}>
                                    {['w', 'e', 'b', 's', 'i', 't', 'e'].map((char: string, index: number) => (
                                      <div 
                                        key={index}
                                        style={{ 
                                          position: 'relative', 
                                          display: 'inline-block', 
                                          opacity: 1, 
                                          transform: 'translate(0px, 0%)' 
                                        } as React.CSSProperties}
                                        className="char"
                                        data-char={char}
                                      >
                                        {char}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Header image */}
                        <div 
                          className="s-projectheader__image"
                          style={{ clipPath: 'inset(0% round 0.694444vw)' }}
                        >
                          <div className="s-projectheader__image-inner">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img 
                              width="2340" 
                              height="1068" 
                              src={selectedProject.imagen}
                              alt={selectedProject.nombre}
                            />
                          </div>
                        </div>
                      </section>

                      {/* Project info */}
                      <section className="s-projectinfo">
                        
                        {/* Description */}
                        <div className="c-a-pl s-projectinfo__desc">
                          <div>
                            <div className="line" style={{ display: 'block', textAlign: 'start', position: 'relative' }}>
                              {selectedProject.detalles.descripcionCompleta.split(' ').map((word: string, wordIndex: number) => (
                                <span key={wordIndex} style={{ position: 'relative', display: 'inline-block', marginRight: '0.25rem' }} className="word">
                                  {word.split('').map((char: string, charIndex: number) => (
                                    <span 
                                      key={charIndex}
                                      style={{ 
                                        position: 'relative', 
                                        display: 'inline-block', 
                                        opacity: 1 
                                      } as React.CSSProperties}
                                      className="char"
                                      data-char={char}
                                    >
                                      {char}
                                    </span>
                                  ))}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Info items */}
                        <div className="s-projectinfo__items">
                          
                          {/* Role */}
                          <div className="s-projectinfo__items-item">
                            <div 
                              className="s-projectinfo__items-item-bg" 
                              style={{ transform: 'translate(0px, 0%)' }}
                            ></div>
                            <div className="c-a-h6 s-projectinfo__items-item-title" style={{}}>
                              <div className="line" style={{ display: 'block', textAlign: 'start', position: 'relative' }}>
                                <div style={{ position: 'relative', display: 'inline-block' }} className="word">
                                  {(locale === 'en' ? 'ROLE' : 'ROL').split('').map((char: string, index: number) => (
                                    <div 
                                      key={index}
                                      style={{ 
                                        position: 'relative', 
                                        display: 'inline-block', 
                                        opacity: 1, 
                                        transform: 'translate(0px, 0px)' 
                                      } as React.CSSProperties}
                                      className="char"
                                      data-char={char}
                                    >
                                      {char}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="c-a-pm s-projectinfo__items-item-content" style={{}}>
                              <div className="line" style={{ display: 'block', textAlign: 'start', position: 'relative' }}>
                                {selectedProject.detalles.rol.split(' ').map((word: string, wordIndex: number) => (
                                  <span key={wordIndex} style={{ position: 'relative', display: 'inline-block', marginRight: '0.25rem' }} className="word">
                                    {word.split('').map((char: string, charIndex: number) => (
                                      <span 
                                        key={charIndex}
                                        style={{ 
                                          position: 'relative', 
                                          display: 'inline-block', 
                                          opacity: 1, 
                                          transform: 'translate(0px, 0px)' 
                                        } as React.CSSProperties}
                                        className="char"
                                        data-char={char}
                                      >
                                        {char}
                                      </span>
                                    ))}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Solutions */}
                          <div className="s-projectinfo__items-item">
                            <div 
                              className="s-projectinfo__items-item-bg" 
                              style={{ transform: 'translate(0px, 0%)' }}
                            ></div>
                            <div className="c-a-h6 s-projectinfo__items-item-title" style={{}}>
                              <div className="line" style={{ display: 'block', textAlign: 'start', position: 'relative' }}>
                                <div style={{ position: 'relative', display: 'inline-block' }} className="word">
                                  {(locale === 'en' ? 'SOLUTIONS' : 'SOLUCIONES').split('').map((char: string, index: number) => (
                                    <div 
                                      key={index}
                                      style={{ 
                                        position: 'relative', 
                                        display: 'inline-block', 
                                        opacity: 1, 
                                        transform: 'translate(0px, 0px)' 
                                      } as React.CSSProperties}
                                      className="char"
                                      data-char={char}
                                    >
                                      {char}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="c-a-pm s-projectinfo__items-item-content" style={{}}>
                              <div className="line" style={{ display: 'block', textAlign: 'start', position: 'relative' }}>
                                {selectedProject.detalles.solucion.split(' ').map((word: string, wordIndex: number) => (
                                  <span key={wordIndex} style={{ position: 'relative', display: 'inline-block', marginRight: '0.25rem' }} className="word">
                                    {word.split('').map((char: string, charIndex: number) => (
                                      <span 
                                        key={charIndex}
                                        style={{ 
                                          position: 'relative', 
                                          display: 'inline-block', 
                                          opacity: 1, 
                                          transform: 'translate(0px, 0px)' 
                                        } as React.CSSProperties}
                                        className="char"
                                        data-char={char}
                                      >
                                        {char}
                                      </span>
                                    ))}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Credits */}
                          <div className="s-projectinfo__items-item">
                            <div 
                              className="s-projectinfo__items-item-bg" 
                              style={{ transform: 'translate(0px, 0%)' }}
                            ></div>
                            <div className="c-a-h6 s-projectinfo__items-item-title" style={{}}>
                              <div className="line" style={{ display: 'block', textAlign: 'start', position: 'relative' }}>
                                <div style={{ position: 'relative', display: 'inline-block' }} className="word">
                                  {(locale === 'en' ? 'CREDITS' : 'CRÉDITOS').split('').map((char: string, index: number) => (
                                    <div 
                                      key={index}
                                      style={{ 
                                        position: 'relative', 
                                        display: 'inline-block', 
                                        opacity: 1, 
                                        transform: 'translate(0px, 0px)' 
                                      } as React.CSSProperties}
                                      className="char"
                                      data-char={char}
                                    >
                                      {char}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="c-a-pm s-projectinfo__items-item-content" style={{}}>
                              <div className="line" style={{ display: 'block', textAlign: 'start', position: 'relative' }}>
                                {(selectedProject.detalles.creditos || 'In partnership with E-me Studio').split(' ').map((word: string, wordIndex: number) => (
                                  <span key={wordIndex} style={{ position: 'relative', display: 'inline-block', marginRight: '0.25rem' }} className="word">
                                    {word.split('').map((char: string, charIndex: number) => (
                                      <span 
                                        key={charIndex}
                                        style={{ 
                                          position: 'relative', 
                                          display: 'inline-block', 
                                          opacity: 1, 
                                          transform: 'translate(0px, 0px)' 
                                        } as React.CSSProperties}
                                        className="char"
                                        data-char={char}
                                      >
                                        {char}
                                      </span>
                                    ))}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Project Duration */}
                          <div className="s-projectinfo__items-item">
                            <div 
                              className="s-projectinfo__items-item-bg" 
                              style={{ transform: 'translate(0px, 0%)' }}
                            ></div>
                            <div className="c-a-h6 s-projectinfo__items-item-title" style={{}}>
                              <div className="line" style={{ display: 'block', textAlign: 'start', position: 'relative' }}>
                                <div style={{ position: 'relative', display: 'inline-block' }} className="word">
                                  {(locale === 'en' ? 'PROJECT DURATION' : 'DURACIÓN PROYECTO').split('').map((char: string, index: number) => (
                                    <div 
                                      key={index}
                                      style={{ 
                                        position: 'relative', 
                                        display: 'inline-block', 
                                        opacity: 1, 
                                        transform: 'translate(0px, 0px)' 
                                      } as React.CSSProperties}
                                      className="char"
                                      data-char={char}
                                    >
                                      {char}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="c-a-pm s-projectinfo__items-item-content" style={{}}>
                              <div className="line" style={{ display: 'block', textAlign: 'start', position: 'relative' }}>
                                {selectedProject.detalles.duracion.split(' ').map((word: string, wordIndex: number) => (
                                  <span key={wordIndex} style={{ position: 'relative', display: 'inline-block', marginRight: '0.25rem' }} className="word">
                                    {word.split('').map((char: string, charIndex: number) => (
                                      <span 
                                        key={charIndex}
                                        style={{ 
                                          position: 'relative', 
                                          display: 'inline-block', 
                                          opacity: 1, 
                                          transform: 'translate(0px, 0px)' 
                                        } as React.CSSProperties}
                                        className="char"
                                        data-char={char}
                                      >
                                        {char}
                                      </span>
                                    ))}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      {/* Client testimonial section - Usando el nuevo componente */}
                      <TestimonialSection
                        title="Nuestros clientes"
                        authorName={selectedProject.detalles.testimonio?.nombre || 'Pauline Jurado'}
                        authorJob={selectedProject.detalles.testimonio?.cargo || 'Marketing Director'}
                        quote={selectedProject.detalles.testimonio?.texto || 'Un equipo de ensueño! Estoy emocionada con nuestra colaboración con el estudio E-me. El equipo es tan creativo como excelente para trabajar. Abordamos un gran desafío en tiempo récord, todo mientras manteníamos una energía increíble, gran comunicación y verdadera atención. Lo clavaron en todo momento. ¡Gracias, equipo!'}
                        imageSrc={selectedProject.detalles.testimonio?.imagen || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face'}
                        className="modal-testimonial"
                      />

                      {/* Additional content sections can be added here */}
                      <div className="c-project-content__extra"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

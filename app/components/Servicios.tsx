'use client';

import { useTranslations, type Locale } from '../lib/i18n';

interface ServiciosProps {
  locale: Locale;
}

export default function Servicios({ locale }: ServiciosProps) {
  const t = useTranslations(locale);

  // Datos de los servicios
  const servicios = [
    {
      numero: "01",
      titulo: t('services.items.0.title') || "Estrategia de Crecimiento",
      descripcion: t('services.items.0.description') || "Replanteemos procesos y hagamos crecer tu empresa.",
      bullets: [
        "Estudiamos tu mercado, público y competencia",
        "Diseñamos planes de contenido, pauta y ventas",
        "Capacitamos o ejecutamos por ti",
        "Medimos y ajustamos según resultados"
      ]
    },
    {
      numero: "02", 
      titulo: t('services.items.1.title') || "AchieveApex",
      descripcion: t('services.items.1.description') || "Automatiza, atiende y vende 24/7.",
      bullets: [
        "Automatiza, atiende y vende 24/7",
        "Seguimiento de leads y cierre de ventas",
        "Crea una experiencia fluida, rápida y alineada con tu marca",
        "Integración total con todo tu sistema"
      ]
    },
    {
      numero: "03",
      titulo: t('services.items.2.title') || "Smart Loop",
      descripcion: t('services.items.2.description') || "Sácale el máximo provecho a tu base de datos.",
      bullets: [
        "Sácale el máximo provecho a tu base de datos",
        "Segmenta y organiza tu base de datos",
        "Automatiza flujos que convierten",
        "Reactiva clientes y leads inactivos",
        "Mide y optimiza cada interacción"
      ]
    },
    {
      numero: "04",
      titulo: t('services.items.3.title') || "Desarrollo Personalizado",
      descripcion: t('services.items.3.description') || "Construimos software a la medida.",
      bullets: [
        "Soluciones a la medida de tu negocio",
        "Escalables y seguras, listas para crecer contigo",
        "Integración total con tus procesos y sistemas",
        "Soporte continuo para garantizar resultados"
      ]
    },
    {
      numero: "05",
      titulo: t('services.items.4.title') || "Landing Pages con AI",
      descripcion: t('services.items.4.description') || "Páginas web con estrategia comercial.",
      bullets: [
        "Diseño estratégico enfocado en conversión",
        "Optimización con AI para mayor rendimiento",
        "Mensajes claros que venden tu propuesta",
        "Listas para captar leads desde el día uno"
      ]
    },
    {
      numero: "06",
      titulo: t('services.items.5.title') || "SEO Local",
      descripcion: t('services.items.5.description') || "Vuélvete visible en las búsquedas en Google.",
      bullets: [
        "Posiciónate en Google en tu zona",
        "Atrae clientes cercanos listos para comprar",
        "Optimiza tu ficha y presencia digital",
        "Genera tráfico local con intención real"
      ]
    },
    {
      numero: "07",
      titulo: t('services.items.6.title') || "Creación de Contenido",
      descripcion: t('services.items.6.description') || "Contenido que vende.",
      bullets: [
        "Contenido híbrido potenciado por estrategia y AI",
        "Storytelling humano + velocidad AI",
        "Formatos adaptados a cada canal",
        "Optimización basada en datos reales"
      ]
    },
    {
      numero: "08",
      titulo: t('services.items.7.title') || "Ads Management",
      descripcion: t('services.items.7.description') || "Anuncios con propósito y resultados.",
      bullets: [
        "Estrategia publicitaria alineada a objetivos de negocio",
        "Segmentación avanzada impulsada por AI",
        "Creativos que convierten, no solo llaman la atención",
        "Optimización continua basada en datos reales"
      ]
    },
    {
      numero: "09",
      titulo: t('services.items.8.title') || "Branding",
      descripcion: t('services.items.8.description') || "Creemos la identidad de tu marca.",
      bullets: [
        "Marcas con propósito y visión de crecimiento",
        "Identidad visual alineada a tu estrategia comercial",
        "Storytelling que conecta y diferencia",
        "Branding aplicado a toda la experiencia de marca"
      ]
    },
    {
      numero: "10",
      titulo: t('services.items.9.title') || "Consultoría",
      descripcion: t('services.items.9.description') || "Te guiamos paso a paso.",
      bullets: [
        "Diagnóstico estratégico de tu negocio",
        "Planes de acción claros y medibles",
        "Acompañamiento en cada fase de implementación",
        "Enfoque en crecimiento, eficiencia y escalabilidad"
      ]
    },
    {
      numero: "11",
      titulo: t('services.items.10.title') || "Experiencia de Marca",
      descripcion: t('services.items.10.description') || "Diseñamos cómo tu cliente vive tu marca.",
      bullets: [
        "Mapeamos cada punto de contacto con tu cliente",
        "Creamos experiencias coherentes, memorables y con propósito",
        "Diseñamos flujos que conectan emoción con conversión",
        "Tu marca se siente, se entiende y se recuerda"
      ]
    }
  ];

  return (
    <section className="pb-[160px] xl:pb-[8.33rem] relative overflow-hidden" style={{ background: 'transparent' }} data-color="#000000" data-active="false">
      {/* Efectos de luz sutiles y más reducidos */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#0043FF] rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#0033C4] rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
      
      <div className="container-custom relative z-10">
        {/* Título de la sección */}
        <div className="pt-20 xl:pt-[8rem]">
          <div className="flex flex-wrap justify-between xl:flex-nowrap xl:gap-x-[5rem]">
            <div className="w-full xl:w-auto">
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold flex flex-wrap items-start gap-x-3 xl:gap-x-[2.6rem] dynamic-text leading-tight transition-colors duration-300">
                {locale === 'en' ? (
                  <>
                    <span>Solutions</span>
                    <span>that sound</span>
                    <span>good, and</span>
                    <span>work too!</span>
                  </>
                ) : (
                  <>
                    <span>Nuestros</span>
                    <span>Servicios</span>
                  </>
                )}
              </h2>
            </div>
          </div>
        </div>
        
        <div className="mt-10 w-full border-b border-t border-white/20 pt-10 md:mt-20 md:pt-10 lg:mt-[6.02rem] lg:pt-[2.08333rem] xl:mt-[13.02rem]">
          <div className="group grid grid-cols-1 gap-y-10 md:gap-y-10 lg:gap-y-[2.08333rem]">
            {servicios.map((servicio) => (
              <div key={servicio.numero} className="relative w-full border-b border-white/20 [&:last-of-type]:border-b-0">
                <div className="group relative flex w-full flex-wrap pb-10 transition-opacity duration-500 ease-in-out hover:!opacity-100 md:pb-20 lg:pb-[4.17rem] group-hover:xl:opacity-30">

                  <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
                    {/* Columna 1: Título - Alineado a la izquierda */}
                    <div className="w-full flex justify-start">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold dynamic-text relative leading-tight transition-colors duration-300 text-left hover-title">
                        {servicio.titulo}
                      </h2>
                    </div>
                    
                    {/* Columna 2: Bullets - Alineados a la derecha con texto justificado a la izquierda */}
                    <div className="w-full flex justify-center">
                      <div className="w-80 xl:w-96">
                        <ul className="space-y-3">
                          {servicio.bullets?.map((bullet, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="mt-1.5 flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 163.712 163.712" className="dynamic-text transition-colors duration-300" fill="currentColor">
                                  <defs>
                                    <style>
                                      {`.cls-1 { clip-path: url(#clippath); }
                                       .cls-2 { fill: none; }
                                       .cls-2, .cls-3, .cls-4 { stroke-width: 0px; }
                                       .cls-3 { fill: currentColor; }
                                       .cls-4 { fill: currentColor; }`}
                                    </style>
                                    <clipPath id="clippath">
                                      <rect className="cls-2" x="-275.851" y="-1690.474" width="1920" height="1437.058"/>
                                    </clipPath>
                                  </defs>
                                  <g>
                                    <path className="cls-3" d="m26.681,81.856c0,30.473,24.703,55.175,55.175,55.175s55.174-24.702,55.174-55.175-24.702-55.175-55.174-55.175-55.175,24.703-55.175,55.175"/>
                                    <path className="cls-3" d="m81.855,163.712C36.721,163.712,0,126.991,0,81.856S36.721,0,81.855,0s81.856,36.721,81.856,81.856-36.721,81.855-81.856,81.855Zm0-151.696C43.346,12.016,12.016,43.346,12.016,81.856s31.33,69.84,69.84,69.84,69.841-31.33,69.841-69.84S120.366,12.016,81.855,12.016Z"/>
                                  </g>
                                  <g className="cls-1">
                                    <rect className="cls-4" x="-275.851" y="-253.416" width="1920" height="1309.493"/>
                                  </g>
                                </svg>
                              </div>
                              <span className="font-sans text-[16px] font-normal leading-[1.4em] xl:text-[1.2rem] dynamic-text opacity-60 transition-colors duration-300 text-left">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Elemento hover opcional para futuros efectos */}
                  <div className="pointer-events-none absolute z-10 -translate-x-1/2 max-lg:hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Aquí se pueden agregar efectos de hover en el futuro */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Botón Agendar Cita */}
          <div className="w-full pt-10 xl:pt-[5.21rem]">
            <a href="/agendar-cita" className="group inline-flex items-center bg-[#FFEA1F] hover:bg-[#FFE500] text-[#030B46] font-bold text-[16px] font-medium uppercase px-6 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 xl:text-[1.14rem]">
              AGENDA UNA CITA
              <svg width="20" height="20" className="ml-2 fill-[#030B46] transition-all duration-300 ease-in-out group-hover:md:ml-3" data-icon="arrow">
                <g>
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.8457 12L8.85393 1.63591L10.4311 0L22 12L10.4311 24L8.85393 22.3641L18.8457 12Z"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 10.8431H20.4235V13.1566H0V10.8431Z"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Estilos CSS-in-JS usando style tag */}
      <style jsx>{`
        /* Estilos adicionales para mejorar la experiencia */
        .group:hover .group-hover\\:xl\\:opacity-30 {
          opacity: 0.3;
        }
        
        .group:hover .group-hover\\:xl\\:opacity-30:hover {
          opacity: 1 !important;
        }
        
        /* Animación suave para el texto */
        .hover-title {
          transition: all 0.3s ease-in-out;
        }
        
        .group:hover .hover-title {
          transform: translateX(10px);
        }
        
        /* Efecto de hover en el botón */
        .group a:hover .transform {
          transform: scaleX(1);
        }
      `}</style>
    </section>
  );
}

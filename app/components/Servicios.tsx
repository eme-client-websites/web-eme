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
                                <svg width="20" height="20" viewBox="0 0 685.723 677.731" className="dynamic-text transition-colors duration-300" fill="currentColor">
                                  <path d="m163.754,468.933c-20.68,6.72-40.213,13.065-59.745,19.414-19.67,6.394-39.357,12.739-58.988,19.254-2.658.882-3.584.445-4.452-2.247-13.306-41.274-26.68-82.526-40.214-123.725-1.102-3.355.506-3.727,2.798-4.466,38.067-12.272,76.123-24.577,114.179-36.882.941-.304,1.86-.677,3.028-1.105-.956-1.367-2.388-1.406-3.579-1.794-37.675-12.27-75.339-24.573-113.065-36.683-3.624-1.163-4.161-2.367-2.986-5.947,13.3-40.489,26.443-81.03,39.503-121.598,1.05-3.263,2.031-4.115,5.604-2.935,37.269,12.307,74.609,24.399,111.945,36.503,1.353.439,2.684,1.436,4.336.804.306-1.615-.978-2.467-1.722-3.492-23.242-32.009-46.487-64.017-69.838-95.947-1.8-2.461-1.81-3.569.807-5.462,34.986-25.304,69.896-50.712,104.739-76.212,2.5-1.83,3.474-1.394,5.141.913,23.391,32.368,46.88,64.665,70.349,96.976.725.997,1.487,1.967,2.431,3.212.896-1.514.541-2.874.542-4.128.024-39.714.071-79.428-.067-119.141-.012-3.532,1.037-4.242,4.352-4.234,42.577.109,85.154.117,127.73-.01,3.63-.011,4.798.667,4.781,4.612-.171,39.463-.104,78.928-.104,118.392,0,1.334,0,2.668,0,4.002.236.121.472.242.708.363.76-1.019,1.532-2.029,2.279-3.058,23.318-32.113,46.669-64.201,69.886-96.387,2.014-2.792,3.176-3.347,6.215-1.119,34.721,25.454,69.555,50.756,104.412,76.024,2.155,1.562,2.572,2.476.829,4.857-23.365,31.922-46.597,63.942-69.86,95.939-1.017,1.399-2.013,2.812-3.587,5.015,8.767-2.836,16.659-5.378,24.544-7.94,31.403-10.203,62.816-20.376,94.183-30.687,2.645-.87,3.58-.455,4.433,2.188,13.204,40.913,26.462,81.809,39.869,122.656,1.215,3.701.247,4.772-3.229,5.888-37.725,12.114-75.391,24.412-113.072,36.664-1.06.345-2.106.734-3.396,1.186.915,1.403,2.354,1.42,3.529,1.801,37.81,12.257,75.613,24.539,113.474,36.64,3.391,1.084,3.778,2.316,2.739,5.491-13.341,40.738-26.588,81.507-39.725,122.312-1.014,3.149-2.147,3.624-5.224,2.614-37.765-12.397-75.576-24.652-113.377-36.94-1.272-.414-2.558-.787-4.666-1.433,5.494,7.615,10.482,14.561,15.504,21.482,19.203,26.463,38.38,52.946,57.691,79.331,1.793,2.45,1.494,3.503-.845,5.194-34.99,25.298-69.935,50.657-104.811,76.112-2.415,1.763-3.442,1.493-5.125-.833-23.411-32.348-46.919-64.626-70.407-96.918-.722-.992-1.491-1.949-2.319-3.026-1.174,1.349-.62,2.764-.621,4.026-.037,39.714-.071,79.428.045,119.142.009,3.243-.724,4.152-4.078,4.143-42.951-.125-85.903-.118-128.854-.01-3.129.008-3.896-.822-3.887-3.917.109-39.714.072-79.428.072-119.142v-4.099c-1.741.506-2.153,1.781-2.845,2.733-23.351,32.085-46.727,64.153-69.944,96.335-2.187,3.031-3.456,3.226-6.492,1.006-34.547-25.271-69.194-50.406-103.903-75.456-2.573-1.857-2.7-2.939-.868-5.448,23.181-31.749,46.245-63.582,69.337-95.396,1.091-1.503,2.167-3.016,3.882-5.404Z"/>
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

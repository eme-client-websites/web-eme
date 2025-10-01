'use client';

import React, { useState } from 'react';
import { type Locale, useTranslations } from '../lib/i18n';

interface EquipoProps {
  locale: Locale;
}

export default function Equipo({ locale }: EquipoProps) {
  const t = useTranslations(locale);
  const [activeMember, setActiveMember] = useState(0);

  // Datos del equipo
  const equipo = [
    {
      id: 'daniel',
      nombre: t('team.members.0.name') || 'Daniel Vengoechea',
      cargo: t('team.members.0.role') || 'Co-fundador, Growth Marketer y CEO',
      descripcion: t('team.members.0.description') || 'Es la mente detrás del éxito de EME, Apex AI, Gettranscribe y Elevvate. Convierte retos en oportunidades con estrategia, datos y AI. Cofundador de Apparta y speaker internacional, impulsa marcas con creatividad y tecnología de alto impacto.',
      imagen: '/Daniel V.JPG',
      especialidades: ['Growth Marketing', 'AI Strategy', 'Business Development']
    },
    {
      id: 'marcela',
      nombre: t('team.members.1.name') || 'Marcela Hinestrosa',
      cargo: t('team.members.1.role') || 'Co-fundadora, Estratega de Marca y Negocios',
      descripcion: t('team.members.1.description') || 'Cree en marcas con propósito y estrategias que se sienten. Acompaña a empresas que quieren crecer con sentido, construyendo desde adentro: visión clara, estructura sólida y experiencias que conectan de verdad.',
      imagen: '/Marcela H.png',
      especialidades: ['Brand Strategy', 'Business Strategy', 'UX Strategy']
    }
  ];

  const handleMemberClick = (index: number) => {
    setActiveMember(index);
  };

  const handleMemberHover = (index: number) => {
    setActiveMember(index);
  };

  return (
    <>
      {/* Título de la sección */}
      <section className="pt-12 pb-8 lg:pt-16 lg:pb-12 xl:pt-20 xl:pb-16 relative overflow-hidden" style={{ background: 'transparent' }} data-active="true" data-color="#FFFFFF">
        {/* Efectos de luz de fondo */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0043FF] rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0033C4] rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>

        <div className="container-custom relative z-10">
          {/* Título de la sección */}
          <div className="pt-8 xl:pt-12">
            <div className="flex flex-wrap justify-between xl:flex-nowrap xl:gap-x-[5rem]">
              <div className="w-full xl:w-auto">
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold flex flex-wrap items-start gap-x-3 xl:gap-x-[2.6rem] dynamic-text leading-tight transition-colors duration-300">
                  {locale === 'en' ? (
                    <>
                      <span>A</span>
                      <span>team</span>
                      <span>that is</span>
                      <span>anything</span>
                      <span>but</span>
                      <span>ordinary</span>
                    </>
                  ) : (
                    <>
                      <span>Un</span>
                      <span>equipo</span>
                      <span>que es</span>
                      <span>todo</span>
                      <span>menos</span>
                      <span>ordinario</span>
                    </>
                  )}
                </h2>
              </div>
              <div className="w-full pt-8 xl:w-auto xl:pt-[2.08rem]">
                <p className="text-[16px] font-normal leading-[1.45em] xl:text-[1.14rem] dynamic-text opacity-70 transition-colors duration-300">
                  {t('team.subtitle') || 'Conoce a los visionarios detrás de E-me. Un dúo estratégico que combina creatividad, tecnología y datos para transformar ideas extraordinarias.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección interactiva del equipo */}
      <section data-active="false" data-color="#FFFFFF" className="pt-8 pb-20 lg:pt-12 lg:pb-32 xl:pt-16 xl:pb-40" style={{ background: 'transparent' }}>
        <div className="container-custom">
          {/* Layout de 2 columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:overflow-visible">
            
            {/* Columna izquierda: Acordeón (8/12) */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="space-y-2">
                {equipo.map((miembro, index) => (
                  <div 
                    key={miembro.id}
                    className={`team-member-card cursor-pointer rounded-xl transition-all duration-300 ${activeMember === index ? 'active' : ''}`}
                    onClick={() => handleMemberClick(index)}
                    onMouseEnter={() => handleMemberHover(index)}
                  >
                    {/* Header del miembro (siempre visible) */}
                    <div className="team-member-header p-6 lg:p-8">
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#0043FF] mb-2 transition-colors duration-300">
                        {miembro.nombre}
                      </h3>
                      <p className="text-lg lg:text-xl text-black font-medium">
                        {miembro.cargo}
                      </p>
                    </div>
                    
                    {/* Contenido expandible */}
                    <div className={`team-member-content overflow-hidden transition-all duration-500 ease-in-out ${activeMember === index ? 'expanded' : 'collapsed'}`}>
                      <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                        {/* Descripción */}
                        <div className="mb-6">
                          <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                            {miembro.descripcion}
                          </p>
                        </div>
                        
                        {/* Especialidades */}
                        <div className="flex flex-wrap gap-3">
                          {miembro.especialidades.map((especialidad, idx) => (
                            <div key={idx} className="bg-[#0043FF] text-white px-4 py-2 text-sm rounded-full font-medium">
                              {especialidad}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Columna derecha: Imagen dinámica (4/12) */}
            <div className="lg:col-span-4 order-1 lg:order-2 relative">
              <div className="relative h-[400px] lg:h-[600px]">
                
                {/* Patrón SVG de fondo */}
                <div className="absolute inset-0 z-10" style={{ 
                  background: "url('/lineas.svg') center 30%/400px no-repeat", 
                  filter: "invert(1) brightness(2)" 
                }}></div>
                
                {/* Imágenes que se salen del contenedor */}
                {equipo.map((miembro, index) => (
                  <div 
                    key={miembro.id}
                    className={`team-member-image absolute inset-0 transition-opacity duration-500 ${activeMember === index ? 'opacity-100' : 'opacity-0'}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={miembro.imagen} 
                      alt={miembro.nombre}
                      className="w-full h-full object-cover relative z-20 transform lg:translate-x-4 lg:-translate-y-32"
                      style={{ objectPosition: '65% 0%' }}
                    />
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Estilos CSS */}
      <style jsx>{`
        /* Estilos para las tarjetas del equipo */
        .team-member-card {
          background: #f8f8f8;
          border-left: 4px solid #e5e5e5;
        }

        .team-member-card.active {
          background: white;
          border-left: 4px solid #0043FF;
          box-shadow: 0 4px 20px rgba(0, 67, 255, 0.1);
        }

        .team-member-card:hover {
          background: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        /* Estados del contenido expandible */
        .team-member-content.collapsed {
          max-height: 0;
          opacity: 0;
        }

        .team-member-content.expanded {
          max-height: 500px;
          opacity: 1;
        }

        /* Transiciones suaves para las imágenes */
        .team-member-image {
          z-index: 10;
        }

        .team-member-image img {
          transition: transform 0.5s ease;
        }

        /* Efectos de hover en las tarjetas */
        .team-member-card .team-member-header {
          transition: all 0.3s ease;
        }

        .team-member-card:hover .team-member-header h3 {
          color: #0043FF !important;
        }

        /* Asegurar que los textos sean siempre visibles */
        .team-member-card h3 {
          color: #0043FF !important;
        }

        .team-member-card.active h3 {
          color: #0043FF !important;
        }

        .team-member-card p {
          color: #000000 !important;
        }

        /* Responsive */
        @media (max-width: 1023px) {
          .team-member-content.expanded {
            max-height: 600px;
          }
        }

        /* Efectos adicionales para mejorar la experiencia visual */
        .container-custom {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        @media (max-width: 768px) {
          .container-custom {
            padding: 0 1.5rem;
          }
          
          .team-member-card .team-member-header {
            padding: 1.5rem;
          }
          
          .team-member-card .team-member-content > div {
            padding: 0 1.5rem 1.5rem;
          }
        }

        /* Animación de entrada */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

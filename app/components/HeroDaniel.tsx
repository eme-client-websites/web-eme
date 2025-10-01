'use client';

import React from 'react';

interface HeroDanielProps {
  locale?: string;
}

const HeroDaniel: React.FC<HeroDanielProps> = ({ locale: _locale = 'es' }) => {
  return (
    <>
      <section className="hero-daniel-section">
        {/* Fondo gris izquierda */}
        <div className="hero-bg-left"></div>
        {/* Fondo rojo derecha */}
        <div className="hero-bg-right"></div>
        
        <div className="hero-daniel-container">
          {/* Título más a la izquierda */}
          <div className="hero-main-title hero-text-area">
            <h1 className="hero-name-line-1 dynamic-text">DANIEL</h1>
            <h1 className="hero-name-line-2 dynamic-text">VENGOECHEA</h1>
            <h2 className="hero-subtitle dynamic-text">Co-fundador, Growth Marketer y CEO</h2>
            <p className="hero-description dynamic-text">Es la mente detrás del éxito de EME, Apex AI, Gettranscribe y Elevvate. Convierte retos en oportunidades con estrategia, datos y AI. Cofundador de Apparta y speaker internacional, impulsa marcas con creatividad y tecnología de alto impacto.</p>
            <div className="hero-tags">
              <span className="hero-tag dynamic-text">Growth Marketing</span>
              <span className="hero-tag dynamic-text">AI Strategy</span>
              <span className="hero-tag dynamic-text">Business Development</span>
            </div>
          </div>

          {/* Imagen SOLO en la parte roja */}
          <div className="hero-image-right">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Daniel V.JPG" alt="Daniel Vengoechea" />
          </div>


          {/* Scroll indicator */}
          <div className="hero-scroll-indicator">
            <svg width="120" height="120" viewBox="0 0 120 120" className="scroll-circle">
              <defs>
                <path 
                  id="circle-path" 
                  d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                />
              </defs>
              <circle cx="60" cy="60" r="45" stroke="#000" strokeWidth="1" fill="none"/>
              <text fontSize="10" letterSpacing="2" fill="#000">
                <textPath href="#circle-path" startOffset="0%">
                  SCROLL DOWN SCROLL DOWN 
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* Sección de Marcela Hinestrosa */}
      <section className="hero-marcela-section">
        {/* Fondo rojo izquierda */}
        <div className="marcela-bg-left"></div>
        {/* Fondo gris derecha */}
        <div className="marcela-bg-right"></div>
        
        <div className="hero-marcela-container">
          {/* Imagen a la izquierda */}
          <div className="marcela-image-left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Marcela H.png" alt="Marcela Hinestrosa" />
          </div>

          {/* Información a la derecha */}
          <div className="marcela-main-content marcela-text-area">
            <h1 className="marcela-name-line-1 dynamic-text">MARCELA</h1>
            <h1 className="marcela-name-line-2 dynamic-text">HINESTROSA</h1>
            <h2 className="marcela-subtitle dynamic-text">Co-fundadora y Directora de Operaciones</h2>
            <p className="marcela-description dynamic-text">Líder estratégica detrás del crecimiento operacional de EME. Experta en gestión de equipos y optimización de procesos. Su visión operativa impulsa la excelencia en cada proyecto, garantizando resultados excepcionales.</p>
            <div className="marcela-tags">
              <span className="marcela-tag dynamic-text">Operations Management</span>
              <span className="marcela-tag dynamic-text">Team Leadership</span>
              <span className="marcela-tag dynamic-text">Process Optimization</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default HeroDaniel;

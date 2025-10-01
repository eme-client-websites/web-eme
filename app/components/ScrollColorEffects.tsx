'use client';

import { useEffect } from 'react';

export default function ScrollColorEffects() {
  useEffect(() => {
    // Agregar transiciones suaves al body y elementos dinámicos
    function addSmoothTransitions() {
      // Transición suave para el body
      document.body.style.transition = 'background-color 0.6s ease-in-out';
      
      // Transiciones suaves para todos los elementos con texto dinámico
      const dynamicTexts = document.querySelectorAll('.dynamic-text:not(footer .dynamic-text):not(footer *)');
      dynamicTexts.forEach(el => {
        const element = el as HTMLElement;
        element.style.transition = 'color 0.6s ease-in-out';
      });
    }
    function forceFooterBlue() {
      // Forzar footer azul profundo siempre
      const footer = document.querySelector('footer');
      if (footer) {
        footer.style.backgroundColor = '#030B46';
        footer.style.background = '#030B46';
        footer.style.color = '#ffffff';
        
        const footerElements = footer.querySelectorAll('*:not(.marquee-text)');
        footerElements.forEach(el => {
          const element = el as HTMLElement;
          // Solo forzar color blanco para texto, iconos SVG en blanco
          if (element.tagName !== 'SVG' && !element.closest('svg')) {
            element.style.color = '#ffffff';
          }
          element.style.backgroundColor = 'transparent';
        });
        
        // Forzar iconos SVG en blanco
        const svgElements = footer.querySelectorAll('svg');
        svgElements.forEach(svg => {
          const svgElement = svg as HTMLElement;
          svgElement.style.color = '#ffffff';
          svgElement.style.fill = '#ffffff';
        });
      }
    }

    function updateColors() {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / documentHeight) * 100;
      
      console.log('ScrollY:', scrollY, 'Scroll %:', scrollPercent.toFixed(1));
      
      // Asegurar transiciones suaves antes de cada cambio
      addSmoothTransitions();
      
      // Test directo con elementos (excluyendo footer)
      const dynamicTexts = document.querySelectorAll('.dynamic-text:not(footer .dynamic-text):not(footer *)');
      console.log('Elementos encontrados:', dynamicTexts.length);
      
      if (scrollPercent <= 8) {
        // Estado 1: texto negro, fondo gris niebla #F1F1F1 (0% - 8%)
        document.body.setAttribute('data-color', 'gray');
        document.body.removeAttribute('data-header');
        document.body.style.background = '';
        document.body.style.backgroundColor = '#F1F1F1'; // FONDO GRIS NIEBLA #F1F1F1
        dynamicTexts.forEach(el => {
          (el as HTMLElement).style.color = '#000000'; // Texto negro
        });
        console.log('Aplicado: NEGRO sobre GRIS NIEBLA #F1F1F1 (0%-8%)');
      } else if (scrollPercent <= 18) {
        // Estado 2: texto blanco, fondo azul #0043FF (8% - 18%)
        document.body.setAttribute('data-color', 'blue');
        document.body.setAttribute('data-header', 'white');
        document.body.style.background = '';
        document.body.style.backgroundColor = '#0043FF'; // FONDO AZUL #0043FF
        dynamicTexts.forEach(el => {
          (el as HTMLElement).style.color = '#ffffff'; // Texto blanco
        });
        console.log('Aplicado: BLANCO sobre AZUL #0043FF (8%-18%)');
      } else if (scrollPercent <= 45) {
        // Estado 3: texto blanco, fondo azul profundo #030B46 (18% - 45%)
        document.body.setAttribute('data-color', 'blue-deep');
        document.body.setAttribute('data-header', 'white');
        document.body.style.background = '';
        document.body.style.backgroundColor = '#030B46'; // FONDO AZUL PROFUNDO #030B46
        dynamicTexts.forEach(el => {
          (el as HTMLElement).style.color = '#ffffff'; // Texto blanco
        });
        console.log('Aplicado: BLANCO sobre AZUL PROFUNDO #030B46 (18%-45%)');
      } else if (scrollPercent <= 70) {
        // Estado 4: texto negro, fondo gris niebla #F1F1F1 (45% - 70%)
        document.body.setAttribute('data-color', 'gray');
        document.body.removeAttribute('data-header');
        document.body.style.background = '';
        document.body.style.backgroundColor = '#F1F1F1'; // FONDO GRIS NIEBLA #F1F1F1
        dynamicTexts.forEach(el => {
          (el as HTMLElement).style.color = '#000000'; // Texto negro
        });
        console.log('Aplicado: NEGRO sobre GRIS NIEBLA #F1F1F1 (45%-70%)');
      } else if (scrollPercent <= 85) {
        // Estado 5: texto blanco, fondo azul #0043FF (70% - 85%)
        document.body.setAttribute('data-color', 'blue');
        document.body.setAttribute('data-header', 'white');
        document.body.style.background = '';
        document.body.style.backgroundColor = '#0043FF'; // FONDO AZUL #0043FF
        dynamicTexts.forEach(el => {
          (el as HTMLElement).style.color = '#ffffff'; // Texto blanco
        });
        console.log('Aplicado: BLANCO sobre AZUL #0043FF (70%-85%)');
      } else if (scrollPercent <= 92) {
        // Estado 6: texto blanco, fondo azul profundo #030B46 (85% - 92%)
        document.body.setAttribute('data-color', 'blue-deep');
        document.body.setAttribute('data-header', 'white');
        document.body.style.background = '';
        document.body.style.backgroundColor = '#030B46'; // FONDO AZUL PROFUNDO #030B46
        dynamicTexts.forEach(el => {
          (el as HTMLElement).style.color = '#ffffff'; // Texto blanco
        });
        console.log('Aplicado: BLANCO sobre AZUL PROFUNDO #030B46 (85%-92%)');
      } else {
        // Estado 7: texto negro, fondo blanco #ffffff (92% - 100%)
        document.body.removeAttribute('data-color');
        document.body.removeAttribute('data-header');
        document.body.style.background = '';
        document.body.style.backgroundColor = '#ffffff'; // FONDO BLANCO #ffffff
        dynamicTexts.forEach(el => {
          (el as HTMLElement).style.color = '#000000'; // Texto negro
        });
        console.log('Aplicado: NEGRO sobre BLANCO #ffffff (92%-100%)');
      }
      
      // Forzar footer azul profundo después de cada cambio
      forceFooterBlue();
    }

    // Ejecutar cuando el componente se monte
    console.log('ScrollColorEffects mounted');
    addSmoothTransitions(); // Configurar transiciones al inicializar
    window.addEventListener('scroll', updateColors);
    updateColors(); // Ejecutar una vez al cargar

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateColors);
    };
  }, []);

  return null; // Este componente no renderiza nada
}

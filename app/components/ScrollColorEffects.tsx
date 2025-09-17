'use client';

import { useEffect } from 'react';

export default function ScrollColorEffects() {
  useEffect(() => {
    function forceFooterWhite() {
      // Forzar footer blanco siempre
      const footer = document.querySelector('footer');
      if (footer) {
        footer.style.backgroundColor = '#ffffff';
        footer.style.background = '#ffffff';
        footer.style.color = '#000000';
        
        const footerElements = footer.querySelectorAll('*');
        footerElements.forEach(el => {
          const element = el as HTMLElement;
          // Solo forzar color negro para texto, no para iconos SVG
          if (element.tagName !== 'SVG' && !element.closest('svg')) {
            element.style.color = '#000000';
          }
          element.style.backgroundColor = 'transparent';
        });
      }
    }

    function updateColors() {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / documentHeight) * 100;
      
      console.log('ScrollY:', scrollY, 'Scroll %:', scrollPercent.toFixed(1));
      
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
      } else if (scrollPercent <= 20) {
        // Estado 2: texto blanco, fondo azul #0043FF (8% - 20%)
        document.body.setAttribute('data-color', 'blue');
        document.body.setAttribute('data-header', 'white');
        document.body.style.background = '';
        document.body.style.backgroundColor = '#0043FF'; // FONDO AZUL #0043FF
        dynamicTexts.forEach(el => {
          (el as HTMLElement).style.color = '#ffffff'; // Texto blanco
        });
        console.log('Aplicado: BLANCO sobre AZUL #0043FF (8%-20%)');
      } else if (scrollPercent <= 45) {
        // Estado 3: texto blanco, fondo azul profundo #030B46 (20% - 45%)
        document.body.setAttribute('data-color', 'blue-deep');
        document.body.setAttribute('data-header', 'white');
        document.body.style.background = '';
        document.body.style.backgroundColor = '#030B46'; // FONDO AZUL PROFUNDO #030B46
        dynamicTexts.forEach(el => {
          (el as HTMLElement).style.color = '#ffffff'; // Texto blanco
        });
        console.log('Aplicado: BLANCO sobre AZUL PROFUNDO #030B46 (20%-45%)');
      } else if (scrollPercent <= 75) {
        // Estado 4: texto negro, fondo gris niebla #F1F1F1 (45% - 75%)
        document.body.setAttribute('data-color', 'gray');
        document.body.removeAttribute('data-header');
        document.body.style.background = '';
        document.body.style.backgroundColor = '#F1F1F1'; // FONDO GRIS NIEBLA #F1F1F1
        dynamicTexts.forEach(el => {
          (el as HTMLElement).style.color = '#000000'; // Texto negro
        });
        console.log('Aplicado: NEGRO sobre GRIS NIEBLA #F1F1F1 (45%-75%)');
      } else if (scrollPercent <= 85) {
        // Estado 5: texto blanco, fondo azul #0043FF (75% - 85%)
        document.body.setAttribute('data-color', 'blue');
        document.body.setAttribute('data-header', 'white');
        document.body.style.background = '';
        document.body.style.backgroundColor = '#0043FF'; // FONDO AZUL #0043FF
        dynamicTexts.forEach(el => {
          (el as HTMLElement).style.color = '#ffffff'; // Texto blanco
        });
        console.log('Aplicado: BLANCO sobre AZUL #0043FF (75%-85%)');
      } else if (scrollPercent <= 95) {
        // Estado 6: texto blanco, fondo azul profundo #030B46 (85% - 95%)
        document.body.setAttribute('data-color', 'blue-deep');
        document.body.setAttribute('data-header', 'white');
        document.body.style.background = '';
        document.body.style.backgroundColor = '#030B46'; // FONDO AZUL PROFUNDO #030B46
        dynamicTexts.forEach(el => {
          (el as HTMLElement).style.color = '#ffffff'; // Texto blanco
        });
        console.log('Aplicado: BLANCO sobre AZUL PROFUNDO #030B46 (85%-95%)');
      } else {
        // Estado 7: texto negro, fondo blanco #ffffff (95% - 100%)
        document.body.removeAttribute('data-color');
        document.body.removeAttribute('data-header');
        document.body.style.background = '';
        document.body.style.backgroundColor = '#ffffff'; // FONDO BLANCO #ffffff
        dynamicTexts.forEach(el => {
          (el as HTMLElement).style.color = '#000000'; // Texto negro
        });
        console.log('Aplicado: NEGRO sobre BLANCO #ffffff (95%-100%)');
      }
      
      // Forzar footer blanco después de cada cambio
      forceFooterWhite();
    }

    // Ejecutar cuando el componente se monte
    console.log('ScrollColorEffects mounted');
    window.addEventListener('scroll', updateColors);
    updateColors(); // Ejecutar una vez al cargar

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateColors);
    };
  }, []);

  return null; // Este componente no renderiza nada
}

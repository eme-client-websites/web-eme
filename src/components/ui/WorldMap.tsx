import React, { useRef, useEffect } from "react";

interface Dot {
  start: {
    lat: number;
    lng: number;
  };
  end: {
    lat: number;
    lng: number;
  };
}

interface WorldMapProps {
  dots?: Dot[];
  lineColor?: string;
}

export default function WorldMap({ 
  dots = [], 
  lineColor = "#ffffff" 
}: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  // Convertir coordenadas lat/lng a coordenadas SVG
  const projectPoint = (lat: number, lng: number, width: number, height: number) => {
    const x = (lng + 180) * (width / 360);
    const y = (90 - lat) * (height / 180);
    return { x, y };
  };

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = svgRef.current;
    const width = 1000;
    const height = 500;

    // Limpiar SVG
    svg.innerHTML = '';

    // Crear puntos del mapa del mundo
    const worldDots = [
      // América del Norte
      { lat: 64.2008, lng: -149.4937 }, // Alaska
      { lat: 49.2827, lng: -123.1207 }, // Vancouver
      { lat: 45.5017, lng: -73.5673 }, // Montreal
      { lat: 40.7128, lng: -74.0060 }, // New York
      { lat: 34.0522, lng: -118.2437 }, // Los Angeles
      { lat: 25.7617, lng: -80.1918 }, // Miami
      { lat: 19.4326, lng: -99.1332 }, // Mexico City
      
      // América del Sur
      { lat: -15.7975, lng: -47.8919 }, // Brasília
      { lat: -23.5505, lng: -46.6333 }, // São Paulo
      { lat: -34.6037, lng: -58.3816 }, // Buenos Aires
      { lat: -33.4489, lng: -70.6693 }, // Santiago
      { lat: -12.0464, lng: -77.0428 }, // Lima
      
      // Europa
      { lat: 51.5074, lng: -0.1278 }, // London
      { lat: 48.8566, lng: 2.3522 }, // Paris
      { lat: 52.5200, lng: 13.4050 }, // Berlin
      { lat: 41.9028, lng: 12.4964 }, // Rome
      { lat: 40.4168, lng: -3.7038 }, // Madrid
      { lat: 59.9139, lng: 10.7522 }, // Oslo
      
      // África
      { lat: 30.0444, lng: 31.2357 }, // Cairo
      { lat: -1.2921, lng: 36.8219 }, // Nairobi
      { lat: -26.2041, lng: 28.0473 }, // Johannesburg
      { lat: 33.9716, lng: -6.8498 }, // Rabat
      { lat: 6.5244, lng: 3.3792 }, // Lagos
      
      // Asia
      { lat: 28.6139, lng: 77.2090 }, // New Delhi
      { lat: 39.9042, lng: 116.4074 }, // Beijing
      { lat: 35.6762, lng: 139.6503 }, // Tokyo
      { lat: 37.5665, lng: 126.9780 }, // Seoul
      { lat: 1.3521, lng: 103.8198 }, // Singapore
      { lat: 13.7563, lng: 100.5018 }, // Bangkok
      { lat: 55.7558, lng: 37.6176 }, // Moscow
      { lat: 43.1332, lng: 131.9113 }, // Vladivostok
      
      // Oceanía
      { lat: -33.8688, lng: 151.2093 }, // Sydney
      { lat: -37.8136, lng: 144.9631 }, // Melbourne
      { lat: -41.2865, lng: 174.7762 }, // Wellington
    ];

    // Crear puntos del mapa
    worldDots.forEach((dot, index) => {
      const point = projectPoint(dot.lat, dot.lng, width, height);
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", point.x.toString());
      circle.setAttribute("cy", point.y.toString());
      circle.setAttribute("r", "2");
      circle.setAttribute("fill", lineColor);
      circle.setAttribute("opacity", "0.6");
      circle.style.animation = `pulse 3s ease-in-out infinite`;
      circle.style.animationDelay = `${(index % 3) * 0.5}s`;
      svg.appendChild(circle);
    });

    // Crear líneas de conexión si hay dots
    dots.forEach((dot, index) => {
      const startPoint = projectPoint(dot.start.lat, dot.start.lng, width, height);
      const endPoint = projectPoint(dot.end.lat, dot.end.lng, width, height);
      
      // Crear línea
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", startPoint.x.toString());
      line.setAttribute("y1", startPoint.y.toString());
      line.setAttribute("x2", endPoint.x.toString());
      line.setAttribute("y2", endPoint.y.toString());
      line.setAttribute("stroke", lineColor);
      line.setAttribute("stroke-width", "1");
      line.setAttribute("opacity", "0.4");
      line.style.strokeDasharray = "5,5";
      line.style.animation = `dash 2s linear infinite`;
      line.style.animationDelay = `${index * 0.3}s`;
      svg.appendChild(line);
      
      // Crear puntos de inicio y fin
      const startCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      startCircle.setAttribute("cx", startPoint.x.toString());
      startCircle.setAttribute("cy", startPoint.y.toString());
      startCircle.setAttribute("r", "3");
      startCircle.setAttribute("fill", lineColor);
      startCircle.setAttribute("opacity", "0.8");
      svg.appendChild(startCircle);
      
      const endCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      endCircle.setAttribute("cx", endPoint.x.toString());
      endCircle.setAttribute("cy", endPoint.y.toString());
      endCircle.setAttribute("r", "3");
      endCircle.setAttribute("fill", lineColor);
      endCircle.setAttribute("opacity", "0.8");
      svg.appendChild(endCircle);
    });
  }, [dots, lineColor]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        ref={svgRef}
        viewBox="0 0 1000 500"
        className="w-full h-full max-w-7xl"
        style={{
          filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))",
        }}
      />
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.5);
          }
        }
        
        @keyframes dash {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 20;
          }
        }
      `}</style>
    </div>
  );
}

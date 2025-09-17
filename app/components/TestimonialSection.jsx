'use client';

import Image from 'next/image';
import styles from './TestimonialSection.module.css';

/**
 * TestimonialSection - Componente de testimonio de cliente
 * Reproduce exactamente el diseño mostrado en la referencia visual
 * 
 * @param {Object} props
 * @param {string} props.title - Título principal (soporta \n para saltos de línea)
 * @param {string} props.authorName - Nombre del autor del testimonio
 * @param {string} props.authorJob - Cargo/posición del autor
 * @param {string} props.quote - Texto del testimonio (sin comillas, se añaden automáticamente)
 * @param {string} props.imageSrc - URL de la imagen del autor
 * @param {string} [props.className] - Clase CSS adicional opcional
 */
export default function TestimonialSection({
  title = "Client\ntestimonial",
  authorName = "Adrien Susini",
  authorJob = "CEO OK C'EST COOL",
  quote = "Looking for true experts who are creative, proactive, efficient and cool? You've come to the right place. LEOLEO fully understood our needs and turned our vision into a concrete, clear, and impactful project.",
  imageSrc = "https://images.prismic.io/leoleo-v2/Z-5PxXdAxsiBwQsE_adrien_susini-min.jpg",
  className = ""
}) {
  // Procesar el título para manejar saltos de línea
  const titleLines = title.split('\n');

  return (
    <section 
      className={`${styles.testimonialSection} ${className}`}
      aria-labelledby="testimonial-title"
    >
      <div className={styles.container}>
        {/* Columna izquierda: Título principal */}
        <div className={styles.titleColumn}>
          <h2 id="testimonial-title" className={styles.mainTitle}>
            {titleLines.map((line, index) => (
              <span key={index} className={styles.titleLine}>
                {line}
                {index < titleLines.length - 1 && <br />}
              </span>
            ))}
          </h2>
        </div>

        {/* Columna derecha: Tarjeta del testimonio */}
        <div className={styles.cardColumn}>
          <div className={styles.testimonialCard}>
            {/* Header: Imagen y datos del autor */}
            <header className={styles.cardHeader}>
              <div className={styles.imageContainer}>
                <Image
                  src={imageSrc}
                  alt={`${authorName}, ${authorJob}`}
                  width={204}
                  height={146}
                  className={styles.authorImage}
                  priority={false}
                  sizes="(max-width: 768px) 120px, 204px"
                />
              </div>
              <div className={styles.authorInfo}>
                <h3 className={styles.authorName}>{authorName}</h3>
                <p className={styles.authorJob}>{authorJob}</p>
              </div>
            </header>

            {/* Cita del testimonio */}
            <blockquote className={styles.quote}>
              <p className={styles.quoteText}>"{quote}"</p>
              <cite className={styles.citation}>
                <span className="sr-only">{authorName}, {authorJob}</span>
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

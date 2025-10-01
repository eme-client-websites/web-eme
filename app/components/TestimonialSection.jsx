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
  title = "Nuestros clientes",
  authorName = "Pauline Jurado",
  authorJob = "Marketing Director",
  quote = "Un equipo de ensueño! Estoy emocionada con nuestra colaboración con el estudio E-me. El equipo es tan creativo como excelente para trabajar. Abordamos un gran desafío en tiempo récord, todo mientras manteníamos una energía increíble, gran comunicación y verdadera atención. Lo clavaron en todo momento. ¡Gracias, equipo!",
  imageSrc = "/logos/partners/imgi_5_263601789_228953422693663_3786388595935595545_n.svg",
  className = ""
}) {
  // Procesar el título para separar las palabras en líneas
  const titleWords = title.split(' ');
  const titleLines = titleWords.length > 1 ? [titleWords[0], titleWords.slice(1).join(' ')] : [title];

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

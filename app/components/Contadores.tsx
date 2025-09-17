'use client';

import { useTranslations, type Locale } from '../lib/i18n';

interface ContadoresProps {
  locale: Locale;
}

export default function Contadores({ locale }: ContadoresProps) {
  const t = useTranslations(locale);

  return (
    <section className="pb-[160px] xl:pb-[8.33rem] relative overflow-hidden" data-color="#FFFFFF" data-active="true">
      <div className="container-custom relative z-10">
        {/* Título de la sección */}
        <div className="pt-20 xl:pt-[8rem]">
          <div className="flex flex-wrap justify-between xl:flex-nowrap xl:gap-x-[5rem]">
            <div className="w-full xl:w-auto">
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold flex flex-wrap items-start gap-x-3 xl:gap-x-[2.6rem] dynamic-text leading-tight transition-colors duration-300">
                {locale === 'en' ? (
                  <>
                    <span>Numbers</span>
                    <span>that don&apos;t</span>
                    <span>just measure—</span>
                    <span>they also</span>
                    <span>inspire</span>
                  </>
                ) : (
                  <>
                    <span>Transformamos</span>
                    <span>y escalamos</span>
                    <span>tu negocio</span>
                  </>
                )}
              </h2>
            </div>
            <div className="w-full pt-8 xl:w-auto xl:pt-[2.08rem]">
              <p className="text-[16px] font-normal leading-[1.45em] xl:text-[1.14rem] dynamic-text opacity-70 transition-colors duration-300">
                {t('counters.subtitle') || 'En E-ME, combinamos tecnología y creatividad para convertir ideas en soluciones inteligentes que optimizan procesos y automatizan resultados. Diseñamos marcas imparables, generamos leads que convierten y construimos estrategias que evolucionan contigo.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

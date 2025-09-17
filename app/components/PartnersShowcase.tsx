'use client';

import { type Locale } from '../lib/i18n';

interface PartnersShowcaseProps {
  locale: Locale;
}

export default function PartnersShowcase({ locale: _locale }: PartnersShowcaseProps) {
  // Partners con sus logos
  const partners = [
    {
      name: 'Pinterest',
      logo: '/logos/partners/P-Pinteres.png'
    },
    {
      name: 'OpenAI',
      logo: '/logos/partners/OpenAI.png'
    },
    {
      name: 'Meta Business',
      logo: '/logos/partners/imgi_5_263601789_228953422693663_3786388595935595545_n.svg'
    },
    {
      name: 'Scrum Alliance',
      logo: '/logos/partners/Certified-Scrum-Master-Badge.png'
    },
    {
      name: 'AWS',
      logo: '/logos/partners/APN.png'
    },
    {
      name: 'Shopify',
      logo: '/logos/partners/Shopify-Partner.png'
    }
  ];

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
                  <span>Partners</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos de Partners */}
      <section className="pb-20 lg:pb-32 xl:pb-40" style={{ background: 'transparent' }} data-active="false" data-color="#FFFFFF">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-8 lg:gap-12 items-center justify-items-center">
            {partners.map((partner) => (
              <div key={partner.name} className="w-full flex items-center justify-center p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} Logo`}
                  className={`max-w-full object-contain transition-all duration-300 opacity-90 hover:opacity-100 ${
                    partner.name === 'Scrum Alliance' ? 'max-h-20' : 'max-h-16'
                  }`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

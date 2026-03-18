// src/components/Testimonials.jsx
// Social Proof: 3 reseñas con estrellas, cita en cursiva y Schema.org AggregateRating.
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

// Schema.org AggregateRating inyectado como JSON-LD para Google
const schemaReviews = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Luiggi Castañeda',
  jobTitle: 'Auxiliar de Enfermería',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '3',
    bestRating: '5',
    worstRating: '5',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Claudia Restrepo' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        'Luiggi cuidó a mi padre durante 3 meses. Su profesionalismo es impecable, pero lo que más valoramos fue su calidad humana y la paciencia que tuvo en cada momento.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Andrés Montoya' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        'Gracias a los cuidados de Luiggi mi recuperación fue mucho más rápida. Es muy organizado con los medicamentos y siempre está atento a cualquier detalle.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Familia Gaviria' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        'Tener a Luiggi en casa es garantía de paz. Sus reportes diarios nos mantenían informados y tranquilos mientras trabajábamos. Totalmente recomendado.',
    },
  ],
};

const reseñas = [
  {
    nombre: 'Claudia Restrepo',
    rol: 'Hija de paciente',
    texto:
      'La puntualidad de Luiggi y su paciencia con mi papá nos dieron una tranquilidad que no habíamos tenido con ninguna agencia. Su calidad humana es incomparable.',
    estrellas: 5,
    iniciales: 'CR',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    nombre: 'Andrés Montoya',
    rol: 'Recuperación Post-cirugía',
    texto:
      'Más que un enfermero, Luiggi se convirtió en un apoyo vital durante mi recuperación. Muy organizado con los medicamentos y siempre pendiente de cualquier detalle.',
    estrellas: 5,
    iniciales: 'AM',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    nombre: 'Familia Gaviria',
    rol: 'Cuidado Adulto Mayor',
    texto:
      'Tener a Luiggi es garantía de paz. Sus reportes diarios nos mantenían informados y tranquilos mientras trabajábamos. Lo recomendamos sin dudarlo.',
    estrellas: 5,
    iniciales: 'FG',
    color: 'bg-emerald-100 text-emerald-700',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-slate-50 overflow-hidden scroll-mt-20">

      {/* Schema.org invisible para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaReviews) }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Cabecera de sección */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-teal-600 font-bold uppercase text-xs tracking-widest mb-3">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Familias que han confiado en{' '}
            <span className="text-teal-600">Luiggi Castañeda</span>
          </h2>
        </div>

        {/* Grid de 3 tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {reseñas.map((reseña, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-60px' }}
              className="relative flex flex-col bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icono de comillas decorativo */}
              <Quote
                aria-hidden="true"
                className="absolute top-6 right-7 h-10 w-10 text-teal-50"
                strokeWidth={1.5}
              />

              {/* Estrellas */}
              <div className="flex gap-0.5 mb-5 relative z-10">
                {Array.from({ length: reseña.estrellas }).map((_, i) => (
                  <Star key={i} size={17} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Cita */}
              <p className="text-slate-600 leading-relaxed italic mb-7 relative z-10 flex-1">
                "{reseña.texto}"
              </p>

              {/* Identidad */}
              <div className="flex items-center gap-3 relative z-10 pt-5 border-t border-slate-50">
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${reseña.color}`}
                >
                  {reseña.iniciales}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm leading-none mb-0.5">
                    {reseña.nombre}
                  </h4>
                  <p className="text-xs text-slate-500">{reseña.rol}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Micro-CTA de fricción cero */}
        <p className="text-center text-slate-500 text-sm mt-12 font-medium">
          Únete a las{' '}
          <strong className="text-slate-700">familias que ya viven con tranquilidad</strong>.{' '}
          <a
            href="#contacto"
            className="text-teal-600 hover:text-teal-700 underline underline-offset-2 transition-colors"
          >
            Agenda tu primera consulta gratuita →
          </a>
        </p>

      </div>
    </section>
  );
}

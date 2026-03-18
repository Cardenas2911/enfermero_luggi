// src/components/FAQ.jsx
// Sección de Preguntas Frecuentes con acordeón interactivo y Schema.org JSON-LD.
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "¿Luiggi cuenta con registro oficial ReTHUS?",
    answer: "Sí, Luiggi Castañeda es Auxiliar de Enfermería con registro oficial en el ReTHUS (Registro Único Nacional del Talento Humano en Salud), lo que garantiza su idoneidad legal y profesional para ejercer en todo el territorio colombiano bajo los estándares del Ministerio de Salud."
  },
  {
    question: "¿Qué zonas de atención cubre en la ciudad?",
    answer: "Actualmente se brinda cobertura principal en Bogotá (Norte, Chapinero, Teusaquillo y alrededores). Para zonas fuera del perímetro urbano o municipios cercanos, se puede coordinar el desplazamiento previa valoración del caso."
  },
  {
    question: "¿Realiza procedimientos de enfermería técnica?",
    answer: "Sí, se realizan procedimientos como inyectología, curaciones de heridas (simples y complejas), toma de puntos, sondajes y administración de medicamentos vía oral, IM o EV, siempre siguiendo la orden médica vigente del paciente."
  },
  {
    question: "¿Cómo se coordinan las visitas o turnos?",
    answer: "La atención se coordina de manera personalizada. Ofrecemos disponibilidad 24/7 para turnos programados o visitas puntuales. El primer paso es una valoración inicial sin costo para definir el plan de cuidado más adecuado."
  },
  {
    question: "¿Se entrega reporte del estado del paciente?",
    answer: "Absolutamente. Se lleva un registro detallado que incluye control de signos vitales, evolución de la condición, cumplimiento de medicación y cualquier observación relevante para que la familia y el médico tratante estén siempre informados."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  // Generación dinámica del Schema para SEO (indexable por Google)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-20">
      <div className="mx-auto px-5 sm:px-8 lg:px-10 max-w-3xl">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block text-teal-600 font-bold uppercase text-xs tracking-widest mb-3">
            Resolviendo dudas
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-slate-500 text-base italic">
            Transparencia absoluta para tu tranquilidad.
          </p>
        </div>

        {/* Inyección del Schema SEO */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
        />

        <div className="divide-y divide-slate-100">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="overflow-hidden">
                <button
                  className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg font-bold transition-colors pr-8 ${isOpen ? 'text-teal-600' : 'text-slate-800 group-hover:text-teal-600'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={22}
                    className={`text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-teal-600' : ''}`} 
                  />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p className="pb-6 text-slate-600 leading-relaxed text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

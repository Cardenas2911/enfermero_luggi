// src/components/ServicesGrid.jsx
// Cuadrícula de servicios: 6 tarjetas con animaciones framer-motion y jerarquía SEO correcta.
import { motion } from 'framer-motion';
import { HeartPulse, UserRound, Pill, Syringe, Activity, ClipboardCheck } from 'lucide-react';

const servicios = [
  {
    icono: HeartPulse,
    titulo: 'Recuperación Post-Operatoria',
    descripcion: 'Monitoreo experto y cuidados especializados para una recuperación rápida y segura tras cirugías.',
  },
  {
    icono: UserRound,
    titulo: 'Cuidado del Adulto Mayor',
    descripcion: 'Atención integral con calidez humana: higiene, alimentación y compañía para mejorar la calidad de vida.',
  },
  {
    icono: Pill,
    titulo: 'Administración de Medicamentos',
    descripcion: 'Control riguroso de horarios y dosis bajo prescripción médica. Tranquilidad y precisión garantizadas.',
  },
  {
    icono: Syringe,
    titulo: 'Curaciones y Procedimientos',
    descripcion: 'Manejo técnico de heridas, retiro de puntos y prevención de infecciones con equipo estéril.',
  },
  {
    icono: Activity,
    titulo: 'Control de Signos Vitales',
    descripcion: 'Medición y reporte diario de tensión arterial, oximetría y frecuencia cardíaca con registro detallado.',
  },
  {
    icono: ClipboardCheck,
    titulo: 'Acompañamiento Hospitalario',
    descripcion: 'Asistencia profesional en traslados médicos, citas clínicas o estancias hospitalarias prolongadas.',
  },
];

// Variante de animación: tarjeta aparece de abajo al hacer scroll
const tarjetaVariante = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.08 },
  }),
};

export default function ServicesGrid() {
  return (
    <section id="servicios" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Encabezado de sección */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-teal-600 font-semibold tracking-widest uppercase text-xs mb-3">
            Servicios Especializados
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Atención médica profesional en la puerta de tu hogar
          </h2>
          <p className="mt-4 text-slate-500 text-base leading-relaxed">
            Cada servicio es brindado con rigor clínico y calidez humana, sin que tu família tenga que desplazarse.
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicios.map((servicio, index) => {
            const Icono = servicio.icono;
            const mensajeWA = encodeURIComponent(`Hola Luiggi, me interesa el servicio de ${servicio.titulo} en Bogotá. ¿Cómo funciona? 🩺`);
            
            return (
              <motion.div
                key={index}
                custom={index}
                variants={tarjetaVariante}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group flex flex-col bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-default"
              >
                {/* Icono con transición de color al hover */}
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 mb-6 shrink-0">
                  <Icono size={28} strokeWidth={1.8} />
                </div>

                {/* Jerarquía semántica correcta para SEO */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                  {servicio.titulo}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm flex-1 mb-6">
                  {servicio.descripcion}
                </p>

                {/* Mini CTA contextual */}
                <a
                  href={`https://wa.me/573507871980?text=${mensajeWA}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-teal-600 font-bold text-sm hover:gap-3 transition-all self-start"
                >
                  Consultar Servicio
                  <span className="text-xl">→</span>
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

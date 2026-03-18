// src/components/AboutMe.jsx
// Sección "Sobre Mí": conexión emocional y credibilidad. E-E-A-T optimizado.
import { motion } from 'framer-motion';
import { CheckCircle2, Heart } from 'lucide-react';

const diferenciales = [
  'Trato 100% Personalizado',
  'Reportes de Estado Diarios',
  'Ética y Rigor Profesional',
  'Registro Oficial ReTHUS',
  'Comunicación constante con la familia',
  'Empatía y paciencia infinita',
];

const fadeLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.1 } },
};

export default function AboutMe({ baseUrl = '' }) {
  return (
    <section id="perfil" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* ===== LADO IMAGEN ===== */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="w-full lg:w-1/2 relative flex justify-center"
          >
            {/* Marco decorativo detrás */}
            <div
              aria-hidden="true"
              className="absolute -top-5 -left-5 w-full h-full border-2 border-teal-100 rounded-[3rem] -z-10"
            />

            {/* Foto principal */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 w-full max-w-sm lg:max-w-none">
              <img
                src={`${baseUrl}/assets/perfil.webp`}
                alt="Luiggi Castañeda - Auxiliar de Enfermería a domicilio en Bogotá, Cundinamarca"
                className="w-full h-[460px] object-cover object-top"
                loading="lazy"
              />
            </div>

            {/* Badge flotante: Vocación */}
            <div className="absolute top-8 -right-4 md:right-0 z-20 hidden md:flex flex-col items-center bg-teal-600 text-white p-5 rounded-2xl shadow-xl">
              <Heart size={22} className="mb-1.5" fill="currentColor" />
              <p className="font-bold text-sm leading-tight text-center">Vocación<br />de Servicio</p>
            </div>

            {/* Badge flotante: ReTHUS */}
            <div className="absolute -bottom-5 left-4 md:left-0 z-20 flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-[11px] text-slate-500 font-medium leading-none mb-0.5">Certificación</p>
                <p className="text-sm font-bold text-slate-900 leading-none">Registro ReTHUS activo</p>
              </div>
            </div>
          </motion.div>

          {/* ===== LADO TEXTO ===== */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="w-full lg:w-1/2"
          >
            <span className="block text-teal-600 font-bold tracking-widest uppercase text-xs mb-4">
              Conoce a tu Enfermero
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Soy <span className="text-teal-600">Luiggi Castañeda</span>, comprometido con el bienestar de tu familia.
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                Como <strong className="font-semibold text-slate-800">Auxiliar de Enfermería</strong>, he dedicado mi
                carrera a perfeccionar no solo mis habilidades técnicas, sino mi capacidad de conectar con las personas.
                Mi camino en la salud nació del deseo de brindar un trato digno y humano a quienes más lo necesitan.
              </p>
              <p>
                Entiendo que cada paciente es un mundo y cada hogar un refugio. Por eso mi compromiso va más allá de
                administrar medicamentos: se trata de <em>escuchar, acompañar y cuidar</em> con rigor profesional y calidez real.
                Cuento con registro oficial <strong className="font-semibold text-slate-800">ReTHUS</strong>, verificable en SISPRO.
              </p>
            </div>

            {/* Lista de diferenciales */}
            <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {diferenciales.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-teal-500 shrink-0" />
                  <span className="text-sm font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA secundario */}
            <a
              href="https://wa.me/573507871980?text=Hola%20Luiggi%2C%20le%C3%AD%20tu%20historia%20en%20la%20p%C3%A1gina%20y%20me%20gustar%C3%ADa%20hablar%20contigo%20sobre%20un%20servicio%20de%20enfermer%C3%ADa."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-teal-600 text-white font-bold text-base shadow-lg shadow-teal-200 hover:bg-teal-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-200 active:scale-95 transition-all duration-300"
            >
              Hablar con Luiggi
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

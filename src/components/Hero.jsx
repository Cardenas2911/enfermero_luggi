// src/components/Hero.jsx
// Hero Section: Gancho de conversión principal con fondo claro, animaciones y CTAs.
'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Activity } from 'lucide-react';

/**
 * Hero principal de la landing page.
 * @param {string} baseUrl - BASE_URL del proyecto Astro para rutas de assets
 */
export default function Hero({ baseUrl = '' }) {

  // Variantes de animación reutilizables
  const fadeLeft = {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: 'easeOut' } },
  };

  const fadeScale = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.75, ease: 'easeOut', delay: 0.1 } },
  };

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay } },
  });

  return (
    <section className="relative overflow-hidden bg-white py-14 lg:py-24">

      {/* ===== AURA DECORATIVA (blob difuminado) ===== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-[480px] w-[480px] rounded-full bg-teal-50 blur-3xl opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-emerald-50 blur-2xl opacity-50"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* ===== BLOQUE TEXTO ===== */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Micro prueba social */}
            <motion.span
              variants={fadeUp(0)}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-700 mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
              📍 Atención domiciliaria inmediata en Bogotá
            </motion.span>

            {/* H1 con palabras clave SEO */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Tranquilidad para ti,{' '}
              <span className="text-teal-600">
                el mejor cuidado
              </span>{' '}
              para los que más amas en la ciudad de Bogotá.
            </h1>

            {/* Subtítulo */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Soy <strong className="font-semibold text-slate-800">Luiggi Castañeda</strong>,
              auxiliar de enfermería con más de <strong className="font-semibold text-slate-800">10 años</strong> de experiencia
              en atención domiciliaria. Brindo cuidado médico humano, seguro y profesional
              en la comodidad de tu hogar.
            </p>

            {/* Badges de confianza rápida */}
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="visible"
              className="mt-7 flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium text-slate-600"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={17} className="text-teal-500" />
                Enfermero Titulado
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={17} className="text-teal-500" />
                Disponible 24/7
              </span>
              <span className="flex items-center gap-1.5">
                <Activity size={17} className="text-teal-500" />
                Valoración inicial sin costo
              </span>
            </motion.div>

            {/* CTAs con jerarquía clara */}
            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4"
            >
              {/* Primario */}
              <a
                href="https://wa.me/573507871980?text=Hola%20Luiggi%2C%20vi%20tu%20p%C3%A1gina%20web%20y%20necesito%20una%20valoraci%C3%B3n%20de%20enfermer%C3%ADa%20en%20Bogot%C3%A1.%20%C2%BFPodemos%20hablar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-teal-600 text-white font-bold text-base shadow-lg shadow-teal-200 hover:bg-teal-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-200 active:scale-95 transition-all duration-300"
              >
                Solicitar Valoración Gratuita
              </a>
              {/* Secundario Ghost */}
              <a
                href="#servicios"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border-2 border-teal-600 text-teal-600 font-bold text-base hover:bg-teal-50 hover:-translate-y-1 active:scale-95 transition-all duration-300"
              >
                Ver Servicios
              </a>
            </motion.div>
          </motion.div>

          {/* ===== BLOQUE IMAGEN ===== */}
          <motion.div
            variants={fadeScale}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px]">

              {/* Aura detrás de la imagen */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-teal-100 to-emerald-50 scale-[0.92] blur-2xl opacity-70"
              />

              {/* Imagen del profesional */}
              <img
                src={`${baseUrl}/assets/hero.webp`}
                alt="Luiggi Castañeda, enfermero a domicilio en Bogotá, brindando atención profesional"
                className="relative z-10 w-full h-[420px] object-cover object-top rounded-[2.5rem] shadow-2xl border-4 border-white"
                loading="eager"
                fetchpriority="high"
              />

              {/* Tarjeta flotante de experiencia - inferior izquierda */}
              <div className="absolute -bottom-5 -left-4 z-20 flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 font-medium leading-none mb-0.5">Experiencia</p>
                  <p className="text-sm font-bold text-slate-900 leading-none">+10 años cuidando vidas</p>
                </div>
              </div>

              {/* Tarjeta flotante de reseña - superior derecha */}
              <div className="absolute -top-4 -right-4 z-20 bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-50">
                <div className="flex items-center gap-1 text-yellow-400 text-base leading-none mb-0.5">
                  {'★★★★★'}
                </div>
                <p className="text-xs font-bold text-slate-800">5.0 · +50 familias</p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

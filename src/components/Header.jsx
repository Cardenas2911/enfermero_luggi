// src/components/Header.jsx
// Header landing page: Transparente al inicio, blanco con blur al hacer scroll.
// Solo muestra logo en móvil (la nav está en MobileNav.jsx en la parte inferior).
import { useState, useEffect } from 'react';

/**
 * Header responsive:
 *  - Móvil: solo logo a la izquierda, CTA oculto (nav está en MobileNav)
 *  - Desktop: logo + nav central + CTA con gradiente
 *  - Efecto: transparente → bg-white/85 + sombra al hacer scroll
 */
export default function Header({ baseUrl = '' }) {
  const [scrolleado, setScrolleado] = useState(false);

  useEffect(() => {
    const manejarScroll = () => setScrolleado(window.scrollY > 10);
    window.addEventListener('scroll', manejarScroll, { passive: true });
    return () => window.removeEventListener('scroll', manejarScroll);
  }, []);

  // soloLg: true → se oculta en tablet (md), visible solo en lg+
  const enlaces = [
    { href: '#inicio',      etiqueta: 'Inicio',       soloLg: true  },
    { href: '#servicios',   etiqueta: 'Servicios',    soloLg: false },
    { href: '#perfil',      etiqueta: 'Sobre mí',     soloLg: false },
    { href: '#testimonios', etiqueta: 'Testimonios',  soloLg: true  },
    { href: '#faq',         etiqueta: 'Preguntas',    soloLg: false },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-out ${
        scrolleado
          ? 'bg-white/85 backdrop-blur-md border-b border-slate-100 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* ===== LOGO ===== */}
        <a
          href="#inicio"
          className="flex items-center shrink-0 hover:opacity-80 transition-opacity"
          aria-label="Ir al inicio - Enfermero Luiggi Castañeda"
        >
          <img
            src={`${baseUrl}/assets/logo.png`}
            alt="Enfermero Luiggi Castañeda"
            className="h-10 md:h-11 w-auto object-contain"
            loading="eager"
          />
        </a>

        {/* ===== NAV DESKTOP ===== */}
        <nav
          className="hidden md:flex items-center gap-5 lg:gap-7"
          aria-label="Navegación principal"
        >
          {enlaces.map((enlace) => (
            <a
              key={enlace.href}
              href={enlace.href}
              className={`text-sm font-medium whitespace-nowrap transition-colors duration-200 hover:text-teal-600 ${
                enlace.soloLg ? 'hidden lg:block' : ''
              } ${
                scrolleado ? 'text-slate-600' : 'text-slate-700'
              }`}
            >
              {enlace.etiqueta}
            </a>
          ))}
        </nav>

        {/* ===== CTA DESKTOP ===== */}
        <div className="hidden md:flex items-center gap-3">
          {/* Teléfono: solo en pantallas grandes */}
          <a
            href="tel:+573507871980"
            className={`hidden xl:block text-sm font-medium transition-colors hover:text-teal-600 ${
              scrolleado ? 'text-slate-500' : 'text-slate-600'
            }`}
          >
            350 787 1980
          </a>
          {/* Botón: compacto en tablet, completo en desktop */}
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-600 to-emerald-500 px-4 py-2 lg:px-6 lg:py-2.5 text-xs lg:text-sm font-semibold text-white shadow-sm hover:shadow-md hover:from-teal-700 hover:to-emerald-600 active:scale-95 transition-all duration-200 whitespace-nowrap"
          >
            <span className="hidden lg:inline">Agendar Valoración</span>
            <span className="lg:hidden">Agendar</span>
          </a>
        </div>

        {/* ===== CTA MÓVIL (muy pequeño, complementa el logo) ===== */}
        <a
          href="https://wa.me/573507871980?text=Hola%2C%20Luiggi!%20Vi%20tu%20p%C3%A1gina%20y%20quisiera%20consultar."
          className="md:hidden flex items-center gap-1.5 rounded-full bg-gradient-to-r from-teal-600 to-emerald-500 px-4 py-2 text-xs font-bold text-white shadow-sm active:scale-95 transition-all"
          aria-label="Contactar ahora"
        >
          Contactar
        </a>

      </div>
    </header>
  );
}

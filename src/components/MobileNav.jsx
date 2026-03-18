// src/components/MobileNav.jsx
// Barra de navegación inferior estilo app nativa.
// Solo visible en móvil (md:hidden). 5 zonas: Inicio, Servicios, WhatsApp (central), Perfil, FAQ.
import { Home, ClipboardList, User, HelpCircle } from 'lucide-react';

// SVG oficial de WhatsApp para el botón central
const IconoWhatsApp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Elemento individual de la barra — sin el botón central
const ItemNav = ({ href, icono: Icono, etiqueta, activo = false }) => (
  <a
    href={href}
    className={`flex flex-col items-center justify-center gap-0.5 flex-1 py-1 transition-colors ${
      activo
        ? 'text-teal-600'
        : 'text-slate-400 hover:text-teal-600 active:text-teal-700'
    }`}
  >
    <Icono size={22} strokeWidth={1.8} />
    <span className="text-[10px] font-semibold tracking-wide leading-tight">{etiqueta}</span>
  </a>
);

export default function MobileNav() {
  const mensajeWA = encodeURIComponent(
    'Hola, Luiggi! Vi tu página web y quisiera consultar sobre el servicio de atención domiciliaria. 🩺'
  );

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
      aria-label="Navegación móvil"
    >
      {/* Altura total: 64px + área segura iOS */}
      <div className="flex items-center justify-around h-16 px-2 pb-[env(safe-area-inset-bottom,0px)]">

        {/* Inicio */}
        <ItemNav href="#inicio" icono={Home} etiqueta="Inicio" />

        {/* Servicios */}
        <ItemNav href="#servicios" icono={ClipboardList} etiqueta="Servicios" />

        {/* ===== BOTÓN CENTRAL WHATSAPP ===== */}
        <div className="relative flex flex-col items-center" style={{ marginTop: '-28px' }}>
          <a
            href={`https://wa.me/573507871980?text=${mensajeWA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#25D366] text-white shadow-[0_6px_24px_rgba(37,211,102,0.45)] border-4 border-white active:scale-90 transition-transform duration-150"
            aria-label="Contactar por WhatsApp"
          >
            {/* Pulso sutil de notificación */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
            <IconoWhatsApp />
          </a>
          <span className="text-[10px] font-semibold text-slate-400 mt-1 leading-none">WhatsApp</span>
        </div>

        {/* Perfil */}
        <ItemNav href="#perfil" icono={User} etiqueta="Perfil" />

        {/* FAQ / Preguntas */}
        <ItemNav href="#faq" icono={HelpCircle} etiqueta="Ayuda" />

      </div>
    </nav>
  );
}

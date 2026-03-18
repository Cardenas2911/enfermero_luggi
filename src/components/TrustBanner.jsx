// src/components/TrustBanner.jsx
// Franja de autoridad entre Hero y Servicios: 4 pilares de confianza.
import { ShieldCheck, Award, Clock, HeartHandshake } from 'lucide-react';

const pilares = [
  {
    icono: ShieldCheck,
    titulo: 'Registro Oficial ReTHUS',
    descripcion: 'Verificable en SISPRO · Garantía legal de idoneidad',
    enlace: 'https://www.sispro.gov.co/',
  },
  {
    icono: Award,
    titulo: '+10 Años de Experiencia',
    descripcion: 'Trayectoria comprobable en cuidado domiciliario',
    enlace: null,
  },
  {
    icono: Clock,
    titulo: 'Atención Domiciliaria 24/7',
    descripcion: 'Disponibilidad prioritaria todos los días del año',
    enlace: null,
  },
  {
    icono: HeartHandshake,
    titulo: 'Enfoque 100% Humano',
    descripcion: 'Empatía y profesionalismo en cada cuidado',
    enlace: null,
  },
];

export default function TrustBanner() {
  return (
    <div className="bg-slate-50 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-2">
          {pilares.map((pilar, index) => {
            const Icono = pilar.icono;
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:gap-4 px-2 md:px-4"
              >
                {/* Icono en caja blanca */}
                <div className="shrink-0 flex items-center justify-center h-11 w-11 rounded-xl bg-white shadow-sm border border-slate-100">
                  <Icono className="h-5 w-5 text-teal-600" strokeWidth={1.8} />
                </div>

                {/* Texto */}
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-snug">
                    {pilar.titulo}
                  </p>
                  {/* Descripción solo visible en desktop */}
                  <p className="hidden md:block text-xs text-slate-500 mt-1 leading-snug">
                    {pilar.enlace ? (
                      <a
                        href={pilar.enlace}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-600 underline underline-offset-2 transition-colors"
                      >
                        {pilar.descripcion}
                      </a>
                    ) : (
                      pilar.descripcion
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

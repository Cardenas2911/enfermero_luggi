// src/components/Services.jsx
// Sección de servicios especializados en tarjetas escaneables
import { HeartPulse, Pill, Syringe, UserCheck } from 'lucide-react';

// Listado de servicios con iconos lucide-react
const servicios = [
  {
    titulo: 'Cuidados Post-operatorios',
    descripcion: 'Recuperación segura y monitorizada en casa tras intervenciones quirúrgicas.',
    icono: HeartPulse,
    color: 'teal',
  },
  {
    titulo: 'Asistencia a Adultos Mayores',
    descripcion: 'Acompañamiento integral, higiene, alimentación y fomento de la autonomía.',
    icono: UserCheck,
    color: 'blue',
  },
  {
    titulo: 'Control de Medicación',
    descripcion: 'Administración rigurosa de medicamentos y control de signos vitales.',
    icono: Pill,
    color: 'violet',
  },
  {
    titulo: 'Manejo de Heridas',
    descripcion: 'Curaciones técnicas, retiro de puntos y prevención de infecciones.',
    icono: Syringe,
    color: 'rose',
  },
];

// Mapa de colores para las tarjetas
const colores = {
  teal:   { fondo: 'bg-teal-50 dark:bg-teal-900/20',   icono: 'text-teal-600 dark:text-teal-400',   borde: 'hover:border-teal-400/50' },
  blue:   { fondo: 'bg-blue-50 dark:bg-blue-900/20',   icono: 'text-blue-600 dark:text-blue-400',   borde: 'hover:border-blue-400/50' },
  violet: { fondo: 'bg-violet-50 dark:bg-violet-900/20', icono: 'text-violet-600 dark:text-violet-400', borde: 'hover:border-violet-400/50' },
  rose:   { fondo: 'bg-rose-50 dark:bg-rose-900/20',   icono: 'text-rose-600 dark:text-rose-400',   borde: 'hover:border-rose-400/50' },
};

export default function Services() {
  return (
    <section className="py-16 md:py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Encabezado de sección */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-slate-100">
            Servicios Especializados en Casa
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Atención médica compasiva adaptada a las necesidades específicas de tu ser querido.
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {servicios.map((servicio, index) => {
            const Icono = servicio.icono;
            const c = colores[servicio.color];
            return (
              <div
                key={index}
                className={`bg-surface-light dark:bg-surface-dark rounded-[2rem] p-7 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md hover:-translate-y-1 ${c.borde} transition-all duration-300 cursor-default`}
              >
                {/* Ícono */}
                <div className={`w-12 h-12 inline-flex items-center justify-center rounded-xl ${c.fondo} ${c.icono} mb-5`}>
                  <Icono size={24} />
                </div>

                {/* Contenido */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 leading-snug">
                  {servicio.titulo}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {servicio.descripcion}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

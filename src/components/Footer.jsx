import { useState } from 'react';
import { MessageCircle, MapPin, Phone, Mail, Award, ShieldCheck } from 'lucide-react';
import LegalModal from './LegalModal';

export default function Footer() {
  const [modalType, setModalType] = useState(null); // 'privacidad' | 'terminos' | null

  const handleOpenModal = (type) => setModalType(type);
  const handleCloseModal = () => setModalType(null);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-28 md:pb-16 border-t border-teal-900/30">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Columna 1: Branding y ReTHUS (E-E-A-T) */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-white">
              <ShieldCheck className="text-teal-400" size={24} />
              <span className="text-xl font-bold tracking-tight">Luiggi Castañeda</span>
            </div>
            <p className="text-sm leading-relaxed">
              Auxiliar de Enfermería con registro oficial en <strong className="text-slate-100">ReTHUS</strong>. Especialista en cuidados paliativos y postoperatorios con enfoque humano en Bogotá.
            </p>
            <div className="flex items-center gap-2 text-[10px] bg-slate-800/50 p-2.5 rounded-xl border border-slate-700 w-fit uppercase font-bold tracking-wider">
              <Award size={14} className="text-teal-400" />
              <span className="text-slate-200">Personal de Salud Verificado</span>
            </div>
          </div>

          {/* Columna 2: Servicios en Bogotá (SEO Local) */}
          <div className="space-y-5">
            <h4 className="text-white font-bold uppercase text-xs tracking-widest">Servicios en Bogotá</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a href="#servicios" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-teal-500"></span>
                  Cuidado de Adulto Mayor
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-teal-500"></span>
                  Recuperación Postoperatoria
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-teal-500"></span>
                  Monitoreo de Signos Vitales
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-teal-500"></span>
                  Manejo de UPP y Heridas
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Datos NAP (Name, Address, Phone) */}
          <div className="space-y-5">
            <h4 className="text-white font-bold uppercase text-xs tracking-widest">Contacto Directo</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="text-teal-400 shrink-0" size={18} />
                <span>Bogotá D.C., Colombia <br/><span className="text-xs text-slate-500 font-normal">Chapinero · Usaquén · Suba · Teusaquillo · Sabana</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-teal-400 shrink-0" size={18} />
                <a href="tel:+573507871980" className="hover:text-white transition-colors">+57 350 787 1980</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-teal-400 shrink-0" size={18} />
                <a href="mailto:contacto@luiggicastaneda.com" className="hover:text-white transition-colors text-xs">contacto@luiggicastaneda.com</a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Información Legal */}
          <div className="space-y-5 text-xs">
            <h4 className="text-white font-bold uppercase tracking-widest">Información Legal</h4>
            <div className="space-y-3 leading-relaxed">
              <p className="text-slate-400">Habilitado por la Secretaría Distrital de Salud de Bogotá.</p>
              <p>© 2026 Luiggi Castañeda. <br/>Cumplimiento Ley 1581 de 2012.</p>
              <div className="flex gap-4 pt-2">
                 <button 
                   onClick={() => handleOpenModal('privacidad')} 
                   className="underline hover:text-white transition-colors cursor-pointer"
                 >
                   Privacidad
                 </button>
                 <button 
                    onClick={() => handleOpenModal('terminos')} 
                    className="underline hover:text-white transition-colors cursor-pointer"
                 >
                   Términos
                 </button>
              </div>
            </div>
          </div>

        </div>

        {/* Firma de Agencia / Créditos */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 uppercase tracking-[0.15em]">
          <span>Diseño Web para Profesionales de la Salud</span>
          <span>Creado con <span className="text-red-500">❤</span> por <a href="https://cardenasnicolas.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors font-extrabold text-[#D4AF37]">Nicolás C.</a></span>
        </div>
      </div>

      {/* Modales Legales */}
      <LegalModal 
        isOpen={modalType === 'privacidad'} 
        onClose={handleCloseModal} 
        title="Política de Privacidad"
      >
        <div className="space-y-4">
          <p>En cumplimiento de la <strong>Ley 1581 de 2012</strong> de Protección de Datos Personales en Colombia, le informamos que sus datos serán tratados de forma segura.</p>
          <h4 className="font-bold text-slate-900 mt-4">1. Responsable del Tratamiento</h4>
          <p>Luiggi Castañeda, Auxiliar de Enfermería identificado con registro ReTHUS, es el responsable del tratamiento de sus datos personales recolectados a través de esta página web y el contacto de WhatsApp.</p>
          <h4 className="font-bold text-slate-900 mt-4">2. Finalidad del Tratamiento</h4>
          <p>Sus datos personales se utilizarán exclusivamente para:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Agendamiento de valoraciones y servicios de enfermería domiciliaria.</li>
            <li>Seguimiento clínico y atención humanizada personalizada.</li>
            <li>Envío de comunicaciones relacionadas con su servicio de salud.</li>
          </ul>
          <h4 className="font-bold text-slate-900 mt-4">3. Sus Derechos</h4>
          <p>Usted tiene derecho a conocer, actualizar, rectificar o solicitar la eliminación de sus datos en cualquier momento enviando un correo a: <a href="mailto:contacto@luiggicastaneda.com" className="text-teal-600 font-bold">contacto@luiggicastaneda.com</a></p>
        </div>
      </LegalModal>

      <LegalModal 
        isOpen={modalType === 'terminos'} 
        onClose={handleCloseModal} 
        title="Términos del Servicio"
      >
        <div className="space-y-4">
          <p>Al solicitar los servicios de Luiggi Castañeda, usted acepta las siguientes condiciones:</p>
          <h4 className="font-bold text-slate-900 mt-4">1. Naturaleza del Servicio</h4>
          <p>Luiggi Castañeda presta servicios independientes de Auxiliar de Enfermería domiciliaria bajo los estándares profesionales establecidos en Colombia. Los servicios se limitan a procedimientos técnicos de enfermería y cuidado humanizado.</p>
          <h4 className="font-bold text-slate-900 mt-4">2. Validez de la Orientación</h4>
          <p>La información proporcionada por vía electrónica o telefónica es de carácter informativo y no reemplaza una valoración clínica presencial. En caso de emergencia médica crítica, el paciente o acudiente debe contactar inmediatamente a la línea 123.</p>
          <h4 className="font-bold text-slate-900 mt-4">3. Tarifas y Disponibilidad</h4>
          <p>Las tarifas serán acordadas previamente a la prestación del servicio. Los servicios están sujetos a disponibilidad de agenda en la ciudad de Bogotá y Sabana.</p>
          <h4 className="font-bold text-slate-900 mt-4">4. Ética Profesional</h4>
          <p>Como personal de salud certificado, el servicio se presta bajo el estricto respeto a la dignidad humana y el secreto profesional.</p>
        </div>
      </LegalModal>
    </footer>
  );
}


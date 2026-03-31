"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronDown, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Stepper from "@/components/Stepper";

const STEPS = [
  { number: 1, label: "Información inicial" },
  { number: 2, label: "Datos del proyecto" },
  { number: 3, label: "Información adicional" },
];

interface FormData {
  nombreCompleto: string; correo: string; telefono: string;
  tipoProyecto: string; descripcion: string; empresa: string;
  fechaInicio: string; presupuesto: string; detalles: string;
  observaciones: string; archivos: string; comentarios: string;
}

const EMPTY_FORM: FormData = {
  nombreCompleto: "", correo: "", telefono: "", tipoProyecto: "",
  descripcion: "", empresa: "", fechaInicio: "", presupuesto: "",
  detalles: "", observaciones: "", archivos: "", comentarios: "",
};

export default function ProcessPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);

  const set = (field: keyof FormData, value: string) =>
    setFormData((p) => ({ ...p, [field]: value }));

  const inputCls = "w-full bg-white border border-[#e5e7eb] rounded-lg px-4 py-2.5 text-sm text-[#111827] outline-none focus:border-[#008100] focus:ring-2 focus:ring-[#008100]/15 transition-all placeholder-[#9ca3af]";
  const labelCls = "block text-[#374151] text-sm font-medium mb-1.5";

  return (
    <div className="min-h-screen bg-[#f8f9fb] flex flex-col">

      {/* HEADER */}
      <header className="sticky top-0 z-20 bg-white border-b border-[#e5e7eb] shadow-sm px-5 md:px-8 py-3 flex items-center justify-between">
        <button onClick={() => router.push("/menu")} className="flex items-center gap-2 text-[#6b7280] hover:text-[#111827] transition-colors text-sm font-medium">
          <ArrowLeft size={18} strokeWidth={1.8} />
          Volver
        </button>
        <Image src="/cian-demo-galca/logo-dark.png" alt="Grupo Galca" width={110} height={28} className="object-contain" />
        <div className="w-16" />
      </header>

      {/* PAGE TITLE */}
      <div className="bg-white border-b border-[#e5e7eb] px-5 md:px-8 py-5">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#008100] text-xs font-bold uppercase tracking-widest mb-1">Formulario</p>
          <h1 className="text-[#111827] font-bold text-2xl">Proceso de permisos</h1>
          <p className="text-[#6b7280] text-sm mt-1">Completa los {STEPS.length} pasos para registrar tu solicitud</p>
        </div>
      </div>

      {/* STEPPER */}
      <div className="bg-white border-b border-[#e5e7eb] px-5 md:px-8 py-5">
        <div className="max-w-3xl mx-auto">
          <Stepper steps={STEPS} currentStep={currentStep} />
        </div>
      </div>

      {/* FORM CARD */}
      <div className="flex-1 px-5 md:px-8 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#e5e7eb] shadow-sm overflow-hidden">
          {/* Card header */}
          <div className="px-6 py-4 border-b border-[#f3f4f6] flex items-center gap-3" style={{ background: "linear-gradient(90deg,#f0fdf4,#fff)" }}>
            <div className="w-8 h-8 rounded-full bg-[#008100] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              {currentStep}
            </div>
            <div>
              <p className="text-[#111827] font-semibold text-base">
                {currentStep === 1 ? "Información inicial" : currentStep === 2 ? "Datos del proyecto" : "Información adicional"}
              </p>
              <p className="text-[#9ca3af] text-xs">Paso {currentStep} de {STEPS.length}</p>
            </div>
          </div>

          <div className="px-6 py-6">
            {/* STEP 1 */}
            {currentStep === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className={labelCls}>Nombre completo <span className="text-red-400">*</span></label>
                  <input type="text" value={formData.nombreCompleto} onChange={(e) => set("nombreCompleto", e.target.value)} className={inputCls} placeholder="Ej. Juan García López" />
                </div>
                <div>
                  <label className={labelCls}>Correo electrónico <span className="text-red-400">*</span></label>
                  <input type="email" value={formData.correo} onChange={(e) => set("correo", e.target.value)} className={inputCls} placeholder="correo@empresa.com" />
                </div>
                <div>
                  <label className={labelCls}>Teléfono de contacto</label>
                  <input type="tel" value={formData.telefono} onChange={(e) => set("telefono", e.target.value)} className={inputCls} placeholder="+52 55 0000 0000" />
                </div>
                <div>
                  <label className={labelCls}>Tipo de proyecto <span className="text-red-400">*</span></label>
                  <div className="relative">
                    <select value={formData.tipoProyecto} onChange={(e) => set("tipoProyecto", e.target.value)} className={`${inputCls} appearance-none pr-9`}>
                      <option value="">Selecciona una opción</option>
                      <option value="capacitacion">Capacitación</option>
                      <option value="gestion">Gestión</option>
                      <option value="tecnico">Técnico</option>
                      <option value="otro">Otro</option>
                    </select>
                    <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] pointer-events-none" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className={labelCls}>Descripción del proyecto</label>
                  <textarea value={formData.descripcion} onChange={(e) => set("descripcion", e.target.value)} className={`${inputCls} min-h-[90px] resize-y`} placeholder="Describe brevemente el objetivo del proyecto..." />
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {currentStep === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Empresa / Organización</label>
                  <input type="text" value={formData.empresa} onChange={(e) => set("empresa", e.target.value)} className={inputCls} placeholder="Nombre de la empresa" />
                </div>
                <div>
                  <label className={labelCls}>Fecha de inicio estimada</label>
                  <input type="date" value={formData.fechaInicio} onChange={(e) => set("fechaInicio", e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Presupuesto estimado</label>
                  <input type="text" value={formData.presupuesto} onChange={(e) => set("presupuesto", e.target.value)} className={inputCls} placeholder="$0.00 MXN" />
                </div>
                <div className="md:col-span-2">
                  <label className={labelCls}>Detalles y alcance del proyecto</label>
                  <textarea value={formData.detalles} onChange={(e) => set("detalles", e.target.value)} className={`${inputCls} min-h-[90px] resize-y`} placeholder="Requerimientos, entregables y alcance..." />
                </div>
                <div className="md:col-span-2">
                  <label className={labelCls}>Observaciones</label>
                  <textarea value={formData.observaciones} onChange={(e) => set("observaciones", e.target.value)} className={`${inputCls} min-h-[70px] resize-y`} placeholder="Consideraciones adicionales..." />
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {currentStep === 3 && (
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className={labelCls}>Archivos de soporte</label>
                  <input type="text" value={formData.archivos} onChange={(e) => set("archivos", e.target.value)} className={inputCls} placeholder="URL o referencia a documentos adjuntos" />
                </div>
                <div>
                  <label className={labelCls}>Comentarios finales</label>
                  <textarea value={formData.comentarios} onChange={(e) => set("comentarios", e.target.value)} className={`${inputCls} min-h-[110px] resize-y`} placeholder="Cualquier información adicional relevante..." />
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#f0fdf4] border border-[#008100]/15">
                  <CheckCircle2 size={18} color="#008100" strokeWidth={1.8} className="mt-0.5 flex-shrink-0" />
                  <p className="text-[#166534] text-sm leading-relaxed">
                    Al enviar este formulario confirmas que la información proporcionada es correcta y autorizas a <strong>Grupo Galca</strong> a procesar tu solicitud de permiso.
                  </p>
                </div>
              </div>
            )}

            {/* BUTTONS */}
            <div className="flex items-center justify-between mt-8 pt-5 border-t border-[#f3f4f6]">
              <div>
                {currentStep > 1 && (
                  <button onClick={() => setCurrentStep((s) => s - 1)} className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#e5e7eb] text-[#374151] text-sm font-medium hover:bg-[#f9fafb] transition-all">
                    <ArrowLeft size={15} /> Anterior
                  </button>
                )}
              </div>
              <button
                onClick={() => { if (currentStep < 3) setCurrentStep((s) => s + 1); else setShowModal(true); }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#008100] text-white text-sm font-semibold hover:bg-[#005900] active:scale-[0.97] transition-all shadow-sm"
              >
                {currentStep === 3 ? "Enviar solicitud" : "Siguiente paso"}
                {currentStep < 3 && <ChevronDown size={15} className="-rotate-90" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full flex flex-col items-center gap-5 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-[#f0fdf4] flex items-center justify-center">
              <CheckCircle2 size={36} color="#008100" strokeWidth={1.6} />
            </div>
            <div className="text-center">
              <h3 className="text-[#111827] font-bold text-xl">¡Solicitud enviada!</h3>
              <p className="text-[#6b7280] text-sm mt-2 leading-relaxed">
                Tu proceso de permiso fue registrado exitosamente. El equipo de Grupo Galca se pondrá en contacto contigo.
              </p>
            </div>
            <button onClick={() => { setShowModal(false); router.push("/menu"); }}
              className="w-full bg-[#008100] text-white py-3 rounded-xl font-semibold hover:bg-[#005900] transition-colors shadow-sm">
              Volver al menú
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

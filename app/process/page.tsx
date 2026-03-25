"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronDown } from "lucide-react";
import Stepper from "@/components/Stepper";

const STEPS = [
  { number: 1, label: "Información inicial" },
  { number: 2, label: "Datos del proyecto" },
  { number: 3, label: "Información adicional" },
];

interface FormData {
  nombreCompleto: string;
  correo: string;
  telefono: string;
  tipoProyecto: string;
  descripcion: string;
  empresa: string;
  fechaInicio: string;
  presupuesto: string;
  detalles: string;
  observaciones: string;
  archivos: string;
  comentarios: string;
}

export default function ProcessPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nombreCompleto: "",
    correo: "",
    telefono: "",
    tipoProyecto: "",
    descripcion: "",
    empresa: "",
    fechaInicio: "",
    presupuesto: "",
    detalles: "",
    observaciones: "",
    archivos: "",
    comentarios: "",
  });

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep((s) => s + 1);
    else {
      setShowModal(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  const handleModalClose = () => {
    setShowModal(false);
    router.push("/menu");
  };

  const inputClass =
    "w-full bg-white border border-[#b2b2b2] rounded-lg px-4 py-3 text-base text-[#1e1e1e] outline-none focus:border-[#008100] focus:ring-2 focus:ring-[#008100]/20 transition-all placeholder-[#b2b2b2]";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* HEADER */}
      <div className="flex items-center px-5 md:px-8 pt-6 pb-4">
        <button
          onClick={() => router.push("/menu")}
          className="flex items-center gap-2 text-[#4a5568] hover:text-[#2d3748] transition-colors"
        >
          <ArrowLeft size={20} strokeWidth={1.5} />
          <span className="text-base">Volver</span>
        </button>
      </div>

      {/* TITLE */}
      <div className="px-5 md:px-8 pb-5">
        <h1 className="text-[#757575] font-semibold text-2xl">Proceso de permisos</h1>
        <hr className="mt-3 border-[#c6c6c8]" />
      </div>

      {/* STEPPER */}
      <div className="px-5 md:px-8 pb-6">
        <Stepper steps={STEPS} currentStep={currentStep} />
      </div>

      {/* FORM CONTENT */}
      <div className="flex-1 px-5 md:px-8 pb-10">
        {/* STEP SUBTITLE */}
        <h2 className="text-[#8c8c8c] text-2xl font-normal mb-3">
          Formulario {currentStep}:{" "}
          {currentStep === 1
            ? "Información inicial"
            : currentStep === 2
            ? "Datos del proyecto"
            : "Información adicional"}
        </h2>
        <hr className="mb-6 border-[#c6c6c8]" />

        {/* STEP 1 */}
        {currentStep === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-[#1e1e1e] text-base font-normal">
                Nombre completo
              </label>
              <input
                type="text"
                value={formData.nombreCompleto}
                onChange={(e) => handleChange("nombreCompleto", e.target.value)}
                className={inputClass}
                placeholder="Ingresa tu nombre completo"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#1e1e1e] text-base font-normal">
                Correo electrónico
              </label>
              <input
                type="email"
                value={formData.correo}
                onChange={(e) => handleChange("correo", e.target.value)}
                className={inputClass}
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#1e1e1e] text-base font-normal">
                Teléfono de contacto
              </label>
              <input
                type="tel"
                value={formData.telefono}
                onChange={(e) => handleChange("telefono", e.target.value)}
                className={inputClass}
                placeholder="+52 000 000 0000"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#1e1e1e] text-base font-normal">
                Tipo de proyecto
              </label>
              <div className="relative">
                <select
                  value={formData.tipoProyecto}
                  onChange={(e) => handleChange("tipoProyecto", e.target.value)}
                  className={`${inputClass} appearance-none pr-10`}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="capacitacion">Capacitación</option>
                  <option value="gestion">Gestión</option>
                  <option value="tecnico">Técnico</option>
                  <option value="otro">Otro</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999] pointer-events-none"
                />
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-[#1e1e1e] text-base font-normal">
                Descripción del proyecto
              </label>
              <textarea
                value={formData.descripcion}
                onChange={(e) => handleChange("descripcion", e.target.value)}
                className={`${inputClass} min-h-[80px] resize-y`}
                placeholder="Describe brevemente el proyecto..."
              />
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {currentStep === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[#1e1e1e] text-base font-normal">
                Empresa / Organización
              </label>
              <input
                type="text"
                value={formData.empresa}
                onChange={(e) => handleChange("empresa", e.target.value)}
                className={inputClass}
                placeholder="Nombre de la empresa"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#1e1e1e] text-base font-normal">
                Fecha de inicio estimada
              </label>
              <input
                type="date"
                value={formData.fechaInicio}
                onChange={(e) => handleChange("fechaInicio", e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#1e1e1e] text-base font-normal">
                Presupuesto estimado
              </label>
              <input
                type="text"
                value={formData.presupuesto}
                onChange={(e) => handleChange("presupuesto", e.target.value)}
                className={inputClass}
                placeholder="$0.00 MXN"
              />
            </div>

            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-[#1e1e1e] text-base font-normal">
                Detalles del proyecto
              </label>
              <textarea
                value={formData.detalles}
                onChange={(e) => handleChange("detalles", e.target.value)}
                className={`${inputClass} min-h-[80px] resize-y`}
                placeholder="Detalla los requerimientos y alcance..."
              />
            </div>

            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-[#1e1e1e] text-base font-normal">
                Observaciones
              </label>
              <textarea
                value={formData.observaciones}
                onChange={(e) => handleChange("observaciones", e.target.value)}
                className={`${inputClass} min-h-[80px] resize-y`}
                placeholder="Observaciones adicionales..."
              />
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {currentStep === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-[#1e1e1e] text-base font-normal">
                Archivos de soporte
              </label>
              <input
                type="text"
                value={formData.archivos}
                onChange={(e) => handleChange("archivos", e.target.value)}
                className={inputClass}
                placeholder="Enlace o referencia a archivos adjuntos"
              />
            </div>

            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-[#1e1e1e] text-base font-normal">
                Comentarios finales
              </label>
              <textarea
                value={formData.comentarios}
                onChange={(e) => handleChange("comentarios", e.target.value)}
                className={`${inputClass} min-h-[120px] resize-y`}
                placeholder="Comentarios adicionales o información relevante..."
              />
            </div>

            <div className="md:col-span-2 p-4 rounded-lg bg-[#f2feea] border border-[#008100]/20">
              <p className="text-[#008100] text-sm font-medium">
                Al enviar este formulario, confirmas que la información proporcionada es correcta y
                autoriza a Grupo Galca a procesar tu solicitud.
              </p>
            </div>
          </div>
        )}

        {/* FOOTER BUTTONS */}
        <div className="flex items-center justify-end gap-3 mt-8">
          {currentStep > 1 && (
            <button
              onClick={handlePrev}
              className="px-6 py-[9px] rounded-lg border border-[#b2b2b2] text-[#2d3748] text-base hover:bg-[#f7fafc] transition-all"
            >
              Anterior
            </button>
          )}
          <button
            onClick={handleNext}
            className="px-6 py-[9px] rounded-lg text-[#f5f5f5] text-base font-medium hover:bg-[#005900] active:scale-[0.98] transition-all duration-150"
            style={{ background: "#008100" }}
          >
            {currentStep === 3 ? "Enviar" : "Siguiente"}
          </button>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 flex flex-col items-center gap-5 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-[#f2feea] flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M6 16L12.5 22.5L26 9"
                  stroke="#008100"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-[#2d3748] font-bold text-xl text-center">
              ¡Formulario enviado exitosamente!
            </h3>
            <p className="text-[#4a5568] text-sm text-center">
              Tu solicitud ha sido registrada. Nos pondremos en contacto contigo pronto.
            </p>
            <button
              onClick={handleModalClose}
              className="w-full bg-[#008100] text-white py-3 rounded-lg font-medium hover:bg-[#005900] transition-colors"
            >
              Volver al menú
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

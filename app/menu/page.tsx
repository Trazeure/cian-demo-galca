"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, FilePlus, LogOut, BarChart2, Bell } from "lucide-react";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import SectionGrid from "@/components/SectionGrid";
import BottomNav from "@/components/BottomNav";
import HamburgerMenu from "@/components/HamburgerMenu";
import Toast from "@/components/Toast";
import { MENU_SECTIONS } from "@/lib/constants";

export default function MenuPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => setToast(msg), []);

  const allEmpty =
    searchQuery.length > 0 &&
    MENU_SECTIONS.every(
      (s) => s.items.filter((i) => i.label.toLowerCase().includes(searchQuery.toLowerCase())).length === 0
    );

  const totalModules = MENU_SECTIONS.reduce((acc, s) => acc + s.items.length, 0);

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fb]">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-30 flex items-center justify-between px-5 md:px-8 py-3 bg-white border-b border-[#e5e7eb] shadow-sm">
        <Image src="/cian-demo-galca/logo-dark.png" alt="Grupo Galca" width={130} height={34} className="object-contain" priority />

        <div className="flex items-center gap-2">
          <button
            onClick={() => showToast("Sin notificaciones nuevas")}
            className="relative w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#f3f4f6] transition-colors"
          >
            <Bell size={19} color="#6b7280" strokeWidth={1.6} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#008100] rounded-full border-2 border-white" />
          </button>
          {/* Avatar abre el drawer */}
          <Avatar name="Usuario" role="Administrativo" onClick={() => setDrawerOpen(true)} />
        </div>
      </header>

      {/* ── BANNER de bienvenida ── */}
      <div className="bg-white border-b border-[#e5e7eb] px-5 md:px-8 py-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-[#111827] font-bold text-xl leading-tight">
              Bienvenido, <span className="text-[#008100]">Usuario</span> 👋
            </h1>
            <p className="text-[#6b7280] text-sm mt-0.5">Sistema de Capacitación y Procesos Administrativos</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="hidden sm:flex items-center gap-4 mr-2">
              <div className="text-center">
                <p className="text-[#008100] font-bold text-lg leading-none">{totalModules}</p>
                <p className="text-[#9ca3af] text-[10px] mt-0.5">Módulos</p>
              </div>
              <div className="w-px h-8 bg-[#e5e7eb]" />
              <div className="text-center">
                <p className="text-[#f59e0b] font-bold text-lg leading-none">{MENU_SECTIONS.length}</p>
                <p className="text-[#9ca3af] text-[10px] mt-0.5">Secciones</p>
              </div>
            </div>
            <button
              onClick={() => router.push("/process")}
              className="flex items-center gap-2 bg-[#008100] text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-[#005900] active:scale-[0.97] transition-all shadow-sm"
            >
              <FilePlus size={16} strokeWidth={1.8} />
              Nueva captura
            </button>
          </div>
        </div>
      </div>

      {/* ── SEARCH ── */}
      <div className="px-5 md:px-8 py-4 bg-white border-b border-[#e5e7eb]">
        <div className="relative w-full max-w-xl">
          <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar módulo, formato, catálogo..."
            className="w-full h-10 pl-10 pr-9 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg text-sm text-[#111827] placeholder-[#9ca3af] outline-none focus:border-[#008100] focus:bg-white focus:ring-2 focus:ring-[#008100]/15 transition-all"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#374151] text-xl leading-none">×</button>
          )}
        </div>
      </div>

      {/* ── CONTENT ── */}
      <main className="flex-1 px-5 md:px-8 pt-7 pb-8 flex flex-col gap-10">
        {allEmpty ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#f3f4f6] flex items-center justify-center">
              <Search size={28} color="#9ca3af" strokeWidth={1.4} />
            </div>
            <p className="text-[#374151] font-semibold text-lg">Sin resultados</p>
            <p className="text-[#9ca3af] text-sm">No encontramos módulos para &ldquo;<strong>{searchQuery}</strong>&rdquo;</p>
            <button onClick={() => setSearchQuery("")} className="mt-1 text-[#008100] text-sm font-medium hover:underline">
              Limpiar búsqueda
            </button>
          </div>
        ) : (
          MENU_SECTIONS.map((section) => (
            <SectionGrid
              key={section.id}
              title={section.title}
              color={section.color}
              items={section.items}
              searchQuery={searchQuery}
              onCardClick={showToast}
            />
          ))
        )}

        {/* ── ACCIONES RÁPIDAS ── */}
        {!allEmpty && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-7 rounded-full bg-[#374151] flex-shrink-0" />
              <h2 className="font-bold text-[#111827] text-[17px]">Acciones Rápidas</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Nueva captura", icon: FilePlus, color: "#008100", textColor: "white", action: () => router.push("/process") },
                { label: "Ver reportes", icon: BarChart2, color: "#f8f9fb", textColor: "#374151", border: true, action: () => showToast("Módulo de reportes en desarrollo") },
                { label: "Mi perfil", icon: null, color: "#f8f9fb", textColor: "#374151", border: true, action: () => setDrawerOpen(true) },
                { label: "Cerrar sesión", icon: LogOut, color: "#fff1f2", textColor: "#ef4444", action: () => router.push("/") },
              ].map(({ label, icon: Icon, color, textColor, border, action }) => (
                <button
                  key={label}
                  onClick={action}
                  className={`flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm transition-all hover:brightness-95 active:scale-[0.97] shadow-sm ${border ? "border border-[#e5e7eb]" : ""}`}
                  style={{ background: color, color: textColor }}
                >
                  {Icon && <Icon size={16} strokeWidth={1.8} />}
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>

      <BottomNav />

      <HamburgerMenu isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} userName="Usuario" userRole="Administrativo" />

      {toast && <Toast message={toast} type="info" onClose={() => setToast(null)} />}
    </div>
  );
}

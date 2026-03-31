"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, Menu } from "lucide-react";
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

  const showToast = useCallback((msg: string) => {
    setToast(msg);
  }, []);

  const allEmpty =
    searchQuery.length > 0 &&
    MENU_SECTIONS.every(
      (section) =>
        section.items.filter((item) =>
          item.label.toLowerCase().includes(searchQuery.toLowerCase())
        ).length === 0
    );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* HEADER — blanco, sin gradiente */}
      <header className="flex items-center justify-between px-5 md:px-10 py-4 flex-shrink-0 bg-white border-b border-[#e2e8f0] shadow-sm">
        <Image
          src="/cian-demo-galca/logo-dark.png"
          alt="Grupo Galca"
          width={140}
          height={36}
          className="object-contain"
          priority
        />

        <div className="flex items-center gap-3">
          {/* Avatar visible solo en desktop */}
          <div className="hidden md:block">
            <Avatar name="Usuario" role="Administrativo" />
          </div>
          {/* Botón hamburguesa */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-[#f2feea] transition-colors"
            aria-label="Abrir menú"
          >
            <Menu size={24} color="#2d3748" strokeWidth={1.8} />
          </button>
        </div>
      </header>

      {/* SEARCH BAR */}
      <div className="flex-shrink-0 px-5 md:px-10 py-4 bg-[#f7fafc] border-b border-[#e2e8f0]">
        <div className="relative w-full max-w-2xl">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar servicios, formatos, catálogos..."
            className="w-full h-11 pl-11 pr-4 bg-white border border-[#b2b2b2] rounded-lg text-base text-[#1e1e1e] placeholder-[#999] outline-none focus:border-[#008100] focus:ring-2 focus:ring-[#008100]/20 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999] hover:text-[#2d3748] text-lg leading-none"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-1 px-5 md:px-10 pt-8 pb-6 flex flex-col gap-12">
        {allEmpty ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <Search size={52} color="#ccc" strokeWidth={1} />
            <p className="text-[#999] text-lg">Sin resultados para <strong>&ldquo;{searchQuery}&rdquo;</strong></p>
            <button onClick={() => setSearchQuery("")} className="text-[#008100] text-sm underline">
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

        {/* ACCIONES RÁPIDAS */}
        {!allEmpty && (
          <div className="flex flex-col gap-5 w-full">
            <div className="inline-flex pb-3" style={{ borderBottom: "3px solid #008100" }}>
              <span className="font-bold text-[#2d3748] text-[22px]">Acciones Rápidas</span>
            </div>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => router.push("/process")}
                className="flex-1 min-w-[140px] py-4 rounded-xl font-bold text-white text-sm transition-all hover:brightness-110 active:scale-[0.98] shadow-md"
                style={{ background: "#008100" }}
              >
                + Nueva captura
              </button>
              <button
                onClick={() => showToast("Módulo de reportes en desarrollo")}
                className="flex-1 min-w-[140px] py-4 rounded-xl font-bold text-[#2d3748] text-sm transition-all hover:bg-[#e2e8f0] active:scale-[0.98] border border-[#e2e8f0]"
              >
                Ver reportes
              </button>
              <button
                onClick={() => setDrawerOpen(true)}
                className="py-4 px-6 rounded-xl font-bold text-white text-sm transition-all hover:brightness-110 active:scale-[0.98] shadow-md"
                style={{ background: "#4a5568" }}
              >
                Mi cuenta
              </button>
              <button
                onClick={() => router.push("/")}
                className="py-4 px-6 rounded-xl font-bold text-white text-sm transition-all hover:brightness-110 active:scale-[0.98] shadow-md"
                style={{ background: "#fa7575" }}
              >
                Salir
              </button>
            </div>
          </div>
        )}
      </main>

      {/* BOTTOM NAV */}
      <BottomNav />

      {/* HAMBURGER DRAWER */}
      <HamburgerMenu
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        userName="Usuario"
        userRole="Administrativo"
      />

      {/* TOAST */}
      {toast && (
        <Toast
          message={toast}
          type="info"
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

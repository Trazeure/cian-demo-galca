"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import Logo from "@/components/Logo";
import Avatar from "@/components/Avatar";
import SectionGrid from "@/components/SectionGrid";
import BottomNav from "@/components/BottomNav";
import { MENU_SECTIONS } from "@/lib/constants";

export default function MenuPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const allEmpty =
    searchQuery &&
    MENU_SECTIONS.every(
      (section) =>
        section.items.filter((item) =>
          item.label.toLowerCase().includes(searchQuery.toLowerCase())
        ).length === 0
    );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* HEADER */}
      <header
        className="flex items-center justify-between px-6 md:px-10 py-5 md:py-6 flex-shrink-0"
        style={{
          background: "linear-gradient(135deg, #f2feea 31%, #005900 100%)",
        }}
      >
        <Logo variant="light" size="md" />
        <Avatar name="Usuario" role="Rol" />
      </header>

      {/* SEARCH BAR */}
      <div
        className="flex-shrink-0 px-6 md:px-10 py-5"
        style={{
          background: "#f7fafc",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div className="relative w-full">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999]"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar servicios, formatos, catálogos..."
            className="w-full h-11 pl-11 pr-4 bg-white border border-[#b2b2b2] rounded-lg text-base text-[#1e1e1e] placeholder-[#999] outline-none focus:border-[#008100] focus:ring-2 focus:ring-[#008100]/20 transition-all"
          />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-1 px-6 md:px-10 pt-10 pb-6 flex flex-col gap-14">
        {allEmpty ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <Search size={48} color="#999" strokeWidth={1} />
            <p className="text-[#999] text-lg">
              Sin resultados para &ldquo;{searchQuery}&rdquo;
            </p>
          </div>
        ) : (
          MENU_SECTIONS.map((section) => (
            <SectionGrid
              key={section.id}
              title={section.title}
              color={section.color}
              items={section.items}
              searchQuery={searchQuery}
            />
          ))
        )}

        {/* ACCIONES RÁPIDAS */}
        {!allEmpty && (
          <div className="flex flex-col gap-5 w-full">
            <div className="inline-flex flex-col pb-4" style={{ borderBottom: "3px solid #008100" }}>
              <span className="font-bold text-[#2d3748] whitespace-nowrap" style={{ fontSize: "23px" }}>
                Acciones Rápidas
              </span>
            </div>
            <div className="flex gap-5 items-center">
              <button
                onClick={() => router.push("/process")}
                className="flex-1 py-5 rounded-xl font-bold text-white text-sm transition-all duration-150 hover:brightness-110 active:scale-[0.98]"
                style={{
                  background: "#008100",
                  boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                }}
              >
                Captura
              </button>
              <button
                onClick={() => router.push("/")}
                className="max-w-[200px] w-full py-5 rounded-xl font-bold text-white text-sm transition-all duration-150 hover:brightness-110 active:scale-[0.98]"
                style={{
                  background: "#fa7575",
                  boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                }}
              >
                Salir
              </button>
            </div>
          </div>
        )}
      </main>

      {/* BOTTOM NAV */}
      <BottomNav />
    </div>
  );
}

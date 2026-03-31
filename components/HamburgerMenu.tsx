"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { X, User, Settings, LogOut, Home, FileText, ChevronRight } from "lucide-react";
import Image from "next/image";

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
  userRole?: string;
}

export default function HamburgerMenu({ isOpen, onClose, userName = "Usuario", userRole = "Rol" }: HamburgerMenuProps) {
  const router = useRouter();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navigate = (path: string) => {
    onClose();
    router.push(path);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header del drawer */}
        <div className="bg-[#008100] px-6 py-6 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#f4e04d] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">{userName.charAt(0).toUpperCase()}</span>
            </div>
            <div>
              <p className="text-white font-bold text-base">{userName}</p>
              <p className="text-white/75 text-sm">{userRole}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white transition-colors mt-1">
            <X size={22} />
          </button>
        </div>

        {/* Logo */}
        <div className="px-6 py-4 border-b border-[#e2e8f0]">
          <Image src="/cian-demo-galca/logo-dark.png" alt="Grupo Galca" width={140} height={32} className="object-contain" />
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-3 py-4 flex flex-col gap-1 overflow-y-auto">
          <p className="text-[#999] text-xs font-semibold uppercase tracking-wider px-3 mb-2">Navegación</p>

          {[
            { icon: Home, label: "Inicio / Menú", path: "/menu" },
            { icon: FileText, label: "Nueva captura", path: "/process" },
          ].map(({ icon: Icon, label, path }) => (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#f2feea] text-[#2d3748] transition-colors group w-full text-left"
            >
              <Icon size={20} color="#008100" strokeWidth={1.5} />
              <span className="flex-1 text-sm font-medium">{label}</span>
              <ChevronRight size={16} className="text-[#ccc] group-hover:text-[#008100] transition-colors" />
            </button>
          ))}

          <p className="text-[#999] text-xs font-semibold uppercase tracking-wider px-3 mt-4 mb-2">Cuenta</p>

          <button className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#f7fafc] text-[#2d3748] transition-colors w-full text-left">
            <User size={20} color="#4a5568" strokeWidth={1.5} />
            <span className="flex-1 text-sm font-medium">Mi perfil</span>
            <ChevronRight size={16} className="text-[#ccc]" />
          </button>

          <button className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#f7fafc] text-[#2d3748] transition-colors w-full text-left">
            <Settings size={20} color="#4a5568" strokeWidth={1.5} />
            <span className="flex-1 text-sm font-medium">Configuración</span>
            <ChevronRight size={16} className="text-[#ccc]" />
          </button>
        </nav>

        {/* Footer */}
        <div className="px-3 py-4 border-t border-[#e2e8f0]">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-red-50 text-[#fa7575] transition-colors w-full text-left"
          >
            <LogOut size={20} strokeWidth={1.5} />
            <span className="text-sm font-medium">Cerrar sesión</span>
          </button>
          <p className="text-center text-[#ccc] text-xs mt-3">© 2026 Grupo Galca</p>
        </div>
      </div>
    </>
  );
}

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { X, User, Settings, LogOut, Home, FilePlus, Bell, HelpCircle, ChevronRight, Shield } from "lucide-react";
import Image from "next/image";

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
  userRole?: string;
}

export default function HamburgerMenu({ isOpen, onClose, userName = "Usuario", userRole = "Administrativo" }: HamburgerMenuProps) {
  const router = useRouter();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navigate = (path: string) => { onClose(); router.push(path); };

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 h-full w-[min(310px,90vw)] bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="relative bg-[#008100] px-5 py-5">
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors">
            <X size={16} color="white" />
          </button>
          <div className="flex items-center gap-3 mt-1">
            <div className="w-12 h-12 rounded-full bg-[#f4e04d] flex items-center justify-center shadow-md flex-shrink-0">
              <span className="text-[#1a1a1a] font-bold text-lg">{userName.charAt(0).toUpperCase()}</span>
            </div>
            <div>
              <p className="text-white font-bold text-[15px] leading-tight">{userName}</p>
              <p className="text-white/70 text-xs mt-0.5">{userRole}</p>
              <span className="inline-block mt-1.5 bg-white/20 text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
                Activo
              </span>
            </div>
          </div>
          <div className="mt-4">
            <Image src="/cian-demo-galca/logo-light.png" alt="Grupo Galca" width={110} height={26} className="object-contain brightness-0 invert opacity-80" />
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-0.5">
          <p className="text-[#9ca3af] text-[10px] font-bold uppercase tracking-widest px-3 py-2">Navegación</p>
          {[
            { icon: Home, label: "Inicio — Menú principal", path: "/menu", desc: "Ver todos los módulos" },
            { icon: FilePlus, label: "Nueva captura", path: "/process", desc: "Proceso de permisos" },
          ].map(({ icon: Icon, label, path, desc }) => (
            <button key={path} onClick={() => navigate(path)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#f2feea] transition-colors group w-full text-left">
              <div className="w-9 h-9 rounded-lg bg-[#f0fdf4] flex items-center justify-center flex-shrink-0 group-hover:bg-[#008100]/10">
                <Icon size={18} color="#008100" strokeWidth={1.6} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#1e1e1e] text-sm font-medium leading-tight">{label}</p>
                <p className="text-[#9ca3af] text-[11px] mt-0.5">{desc}</p>
              </div>
              <ChevronRight size={14} className="text-[#d1d5db] group-hover:text-[#008100] flex-shrink-0" />
            </button>
          ))}

          <p className="text-[#9ca3af] text-[10px] font-bold uppercase tracking-widest px-3 py-2 mt-3">Mi cuenta</p>
          {[
            { icon: User, label: "Mi perfil", desc: "Editar información personal" },
            { icon: Bell, label: "Notificaciones", desc: "Sin notificaciones nuevas" },
            { icon: Shield, label: "Seguridad", desc: "Contraseña y accesos" },
            { icon: Settings, label: "Configuración", desc: "Preferencias del sistema" },
            { icon: HelpCircle, label: "Ayuda y soporte", desc: "Centro de ayuda" },
          ].map(({ icon: Icon, label, desc }) => (
            <button key={label}
              className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#f8fafc] transition-colors group w-full text-left">
              <div className="w-9 h-9 rounded-lg bg-[#f8fafc] flex items-center justify-center flex-shrink-0 group-hover:bg-[#f0f0f0]">
                <Icon size={18} color="#6b7280" strokeWidth={1.6} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#1e1e1e] text-sm font-medium leading-tight">{label}</p>
                <p className="text-[#9ca3af] text-[11px] mt-0.5">{desc}</p>
              </div>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-3 py-4 border-t border-[#f0f0f0]">
          <button onClick={() => navigate("/")}
            className="flex items-center gap-3 w-full px-3 py-3 rounded-xl hover:bg-red-50 transition-colors group text-left">
            <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
              <LogOut size={18} color="#ef4444" strokeWidth={1.6} />
            </div>
            <div>
              <p className="text-red-500 text-sm font-semibold">Cerrar sesión</p>
              <p className="text-[#9ca3af] text-[11px]">Salir del sistema</p>
            </div>
          </button>
          <p className="text-center text-[#d1d5db] text-[11px] mt-3">SCPA v1.0 · © 2026 Grupo Galca</p>
        </div>
      </div>
    </>
  );
}

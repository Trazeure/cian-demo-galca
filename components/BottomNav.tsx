"use client";

import { Home, FileText, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  const items = [
    { icon: Home, label: "Inicio", path: "/menu" },
    { icon: FileText, label: "Documentos", path: "/process" },
    { icon: User, label: "Perfil", path: "/menu" },
  ];

  return (
    <div className="sticky bottom-0 w-full flex items-center bg-white border-t border-[#e5e7eb] z-10 px-2 pb-safe">
      {items.map(({ icon: Icon, label, path }) => {
        const active = pathname === path || (path === "/menu" && pathname?.startsWith("/menu"));
        return (
          <button
            key={label}
            onClick={() => router.push(path)}
            className={`flex-1 flex flex-col items-center gap-1 py-3 transition-colors ${active ? "text-[#008100]" : "text-[#9ca3af] hover:text-[#6b7280]"}`}
          >
            <div className={`relative p-1 rounded-lg transition-colors ${active ? "bg-[#f0fdf4]" : ""}`}>
              <Icon size={22} strokeWidth={active ? 2 : 1.5} />
              {active && <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#008100]" />}
            </div>
            <span className={`text-[11px] font-${active ? "semibold" : "normal"}`}>{label}</span>
          </button>
        );
      })}
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Building2, Eye, EyeOff } from "lucide-react";
import Logo from "@/components/Logo";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    router.push("/menu");
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE — Form */}
      <div className="hidden md:flex md:w-1/2 bg-white flex-col justify-center px-16 py-12 gap-8">
        <Logo variant="dark" size="md" />

        <div className="flex flex-col gap-1">
          <p className="text-[#999] text-[20px] font-normal">¡Bienvenido!</p>
          <h1 className="text-black text-[45px] font-normal leading-tight">
            Iniciar sesión
          </h1>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {/* Username */}
          <div className="flex flex-col gap-2">
            <label className="text-[#1e1e1e] text-base font-normal">Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-10 px-4 border border-[#b2b2b2] rounded-lg text-base text-[#1e1e1e] outline-none focus:border-[#008100] focus:ring-2 focus:ring-[#008100]/20 transition-all"
              placeholder=""
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-[#1e1e1e] text-base font-normal">Contraseña</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-10 px-4 pr-10 border border-[#b2b2b2] rounded-lg text-base text-[#1e1e1e] outline-none focus:border-[#008100] focus:ring-2 focus:ring-[#008100]/20 transition-all"
                placeholder=""
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999] hover:text-[#2d3748] transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Options row */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                onClick={() => setRememberMe(!rememberMe)}
                className="w-4 h-4 rounded flex items-center justify-center cursor-pointer transition-all flex-shrink-0"
                style={{
                  background: rememberMe ? "#008100" : "white",
                  border: rememberMe ? "none" : "1.5px solid #b2b2b2",
                }}
              >
                {rememberMe && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="text-[#1e1e1e] text-base">Recuérdame</span>
            </label>
            <button className="text-[#2d73b1] text-base font-semibold hover:underline">
              ¿Olvidaste la contraseña?
            </button>
          </div>

          {/* Submit */}
          <button
            onClick={handleLogin}
            className="w-full bg-[#008100] text-[#f5f5f5] text-base font-normal py-3 rounded-lg hover:bg-[#005900] active:scale-[0.98] transition-all duration-150"
          >
            Iniciar sesión
          </button>
        </div>

        <p className="text-[#999] text-base text-center">© 2026 Grupo Galca</p>
      </div>

      {/* RIGHT SIDE — Decorative gradient */}
      <div
        className="hidden md:flex md:w-1/2 items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #f2feea 31%, #005900 100%)",
        }}
      >
        <div
          className="rounded-2xl p-10 flex flex-col items-center gap-5 max-w-xs text-center"
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          <Building2 size={64} color="#008100" strokeWidth={1.2} />
          <p className="text-[#2d3748] font-semibold text-lg leading-snug">
            Sistema de Capacitación y Procesos Administrativos
          </p>
          <p className="text-[#4a5568] text-sm">Grupo Galca — SCPA</p>
        </div>
      </div>

      {/* MOBILE — Full screen with card */}
      <div
        className="flex md:hidden w-full min-h-screen items-center justify-center p-6"
        style={{
          background: "linear-gradient(135deg, #f2feea 31%, #005900 100%)",
        }}
      >
        <div className="bg-white rounded-[25px] px-10 py-8 w-full max-w-[450px] flex flex-col gap-7 items-center shadow-xl">
          <Logo variant="dark" size="md" />

          <div className="flex flex-col gap-1 w-full">
            <p className="text-[#999] text-lg font-normal">¡Bienvenido!</p>
            <h1 className="text-black text-[36px] font-normal leading-tight">
              Iniciar sesión
            </h1>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-2">
              <label className="text-[#1e1e1e] text-base">Usuario</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full h-10 px-4 border border-[#b2b2b2] rounded-lg text-base outline-none focus:border-[#008100] focus:ring-2 focus:ring-[#008100]/20 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#1e1e1e] text-base">Contraseña</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-10 px-4 pr-10 border border-[#b2b2b2] rounded-lg text-base outline-none focus:border-[#008100] focus:ring-2 focus:ring-[#008100]/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999]"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <div
                  onClick={() => setRememberMe(!rememberMe)}
                  className="w-4 h-4 rounded flex items-center justify-center cursor-pointer flex-shrink-0"
                  style={{
                    background: rememberMe ? "#008100" : "white",
                    border: rememberMe ? "none" : "1.5px solid #b2b2b2",
                  }}
                >
                  {rememberMe && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span className="text-[#1e1e1e] text-sm">Recuérdame</span>
              </label>
              <button className="text-[#2d73b1] text-sm font-semibold hover:underline">
                ¿Olvidaste?
              </button>
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-[#008100] text-[#f5f5f5] text-base py-3 rounded-lg hover:bg-[#005900] active:scale-[0.98] transition-all duration-150"
            >
              Iniciar sesión
            </button>
          </div>

          <p className="text-[#999] text-sm text-center">© 2026 Grupo Galca</p>
        </div>
      </div>
    </div>
  );
}

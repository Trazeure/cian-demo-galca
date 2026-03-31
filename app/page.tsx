"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setError("Por favor ingresa usuario y contraseña.");
      return;
    }
    setError("");
    router.push("/menu");
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleLogin();
  };

  const formContent = (isMobile = false) => (
    <>
      {/* Logo */}
      <div className={isMobile ? "flex justify-center" : ""}>
        <Image
          src="/cian-demo-galca/logo-dark.png"
          alt="Grupo Galca"
          width={160}
          height={40}
          className="object-contain"
          priority
        />
      </div>

      {/* Header */}
      <div className="flex flex-col gap-1">
        <p className="text-[#999] text-[20px] font-normal">¡Bienvenido!</p>
        <h1 className={`text-black font-normal leading-tight ${isMobile ? "text-[32px]" : "text-[42px]"}`}>
          Iniciar sesión
        </h1>
      </div>

      {/* Fields */}
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-2">
          <label className="text-[#1e1e1e] text-base">Usuario o correo</label>
          <input
            type="text"
            value={username}
            onChange={(e) => { setUsername(e.target.value); setError(""); }}
            onKeyDown={handleKey}
            className="w-full h-11 px-4 border border-[#b2b2b2] rounded-lg text-base text-[#1e1e1e] outline-none focus:border-[#008100] focus:ring-2 focus:ring-[#008100]/20 transition-all"
            placeholder="Ej. juan@grupogalca.com"
            autoComplete="username"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#1e1e1e] text-base">Contraseña</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              onKeyDown={handleKey}
              className="w-full h-11 px-4 pr-11 border border-[#b2b2b2] rounded-lg text-base text-[#1e1e1e] outline-none focus:border-[#008100] focus:ring-2 focus:ring-[#008100]/20 transition-all"
              placeholder="••••••••"
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999] hover:text-[#2d3748] transition-colors"
            >
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-sm -mt-2">{error}</p>
        )}

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2.5 cursor-pointer select-none" onClick={() => setRememberMe(!rememberMe)}>
            <div
              className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all"
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
            ¿Olvidaste la contraseña?
          </button>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-[#008100] text-white text-base font-medium py-3 rounded-lg hover:bg-[#005900] active:scale-[0.98] transition-all duration-150 shadow-sm"
        >
          Iniciar sesión
        </button>
      </div>

      <p className="text-[#999] text-sm text-center">© 2026 Grupo Galca — SCPA</p>
    </>
  );

  return (
    <div className="min-h-screen flex">
      {/* LEFT — Form (desktop) */}
      <div className="hidden md:flex md:w-[45%] bg-white flex-col justify-center px-14 py-12 gap-7">
        {formContent(false)}
      </div>

      {/* RIGHT — Photo background (desktop) */}
      <div className="hidden md:block md:w-[55%] relative">
        <Image
          src="/cian-demo-galca/login-bg.jpg"
          alt="Grupo Galca"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay con info */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-10">
          <div className="text-white">
            <p className="text-2xl font-bold leading-snug max-w-sm">
              Sistema de Capacitación y Procesos Administrativos
            </p>
            <p className="text-white/70 text-sm mt-2">Grupo Galca — Plataforma interna</p>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex md:hidden w-full min-h-screen relative">
        <Image
          src="/cian-demo-galca/login-bg.jpg"
          alt="Grupo Galca"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full flex items-center justify-center p-5">
          <div className="bg-white rounded-[24px] px-8 py-8 w-full max-w-[420px] flex flex-col gap-6 shadow-2xl">
            {formContent(true)}
          </div>
        </div>
      </div>
    </div>
  );
}

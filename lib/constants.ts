export const COLORS = {
  primary: "#008100",
  primaryHover: "#005900",
  primaryLight: "#f2feea",
  white: "#ffffff",
  bg: "#f7fafc",
  border: "#e2e8f0",
  text: "#2d3748",
  textSoft: "#4a5568",
  muted: "#999999",
  avatarYellow: "#f4e04d",
  inputBorder: "#b2b2b2",
  c1Yellow: "#f3c861",
  c2Orange: "#ff8757",
  c3Red: "#fa7575",
  c4Teal: "#80cab0",
  c5Purple: "#9b92d7",
};

export interface MenuItem {
  id: string;
  icon: string;
  label: string;
  navigateTo?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  color: string;
  items: MenuItem[];
}

export const MENU_SECTIONS: MenuSection[] = [
  {
    id: "documentacion",
    title: "Centro de Documentación y Formación",
    color: COLORS.c1Yellow,
    items: [
      { id: "formatos", icon: "FileText", label: "Formatos", navigateTo: "/process" },
      { id: "lista-verificacion", icon: "ListChecks", label: "Lista de verificación" },
      { id: "catalogo-cursos", icon: "BookOpen", label: "Catálogo de cursos" },
      { id: "catalogo-servicios", icon: "Library", label: "Catálogo de servicios" },
      { id: "normas-iso", icon: "ScrollText", label: "Normas ISO" },
    ],
  },
  {
    id: "operacion",
    title: "Operación y Gestión",
    color: COLORS.c4Teal,
    items: [
      { id: "programacion", icon: "Calendar", label: "Programación de servicios" },
      { id: "capacitacion", icon: "GraduationCap", label: "Servicios de capacitación" },
      { id: "gestion", icon: "Eye", label: "Servicios de gestión" },
      { id: "tecnicos", icon: "Wrench", label: "Servicios técnicos" },
      { id: "mantenimiento", icon: "BarChart3", label: "Mantenimiento" },
      { id: "sistema-gestion", icon: "BarChart3", label: "Sistema de gestión" },
      { id: "diagnostico", icon: "BarChart3", label: "Herramienta de diagnóstico" },
    ],
  },
  {
    id: "institucional",
    title: "Marco Institucional",
    color: COLORS.c5Purple,
    items: [
      { id: "politicas-calidad", icon: "Landmark", label: "Políticas de calidad" },
      { id: "oficina-verde", icon: "Building2", label: "Políticas de oficina verde" },
      { id: "mision-vision", icon: "Eye", label: "Misión y visión" },
      { id: "organigrama", icon: "BarChart3", label: "Organigrama" },
      { id: "leyes", icon: "Gavel", label: "Leyes y normas" },
    ],
  },
  {
    id: "comunicacion",
    title: "Comunicación y Resultados",
    color: COLORS.c2Orange,
    items: [
      { id: "reporte-seguimiento", icon: "Gavel", label: "Reporte de seguimiento de servicios", navigateTo: "/process" },
      { id: "diagrama-comunicacion", icon: "Gavel", label: "Diagrama de comunicación" },
      { id: "correos", icon: "Mail", label: "Envía correos" },
    ],
  },
];

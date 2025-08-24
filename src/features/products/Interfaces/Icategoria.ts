export const ICategorias = {
  Todos:"Todos",
  Telefonos: "Telefonos",
  Musica: "Musica",
  Electronicos: "Electronicos",
  Gamer: "Gamer",
  Componentes:'Componentes'
} as const;

// Tipo derivado automáticamente
export type ICategorias = typeof ICategorias[keyof typeof ICategorias];
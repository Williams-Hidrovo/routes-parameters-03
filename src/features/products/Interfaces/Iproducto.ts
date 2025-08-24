import type { ICategorias } from "./Icategoria";

export interface IProducto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  url: string;
  categoria:ICategorias
}
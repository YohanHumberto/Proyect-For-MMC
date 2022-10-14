import { Cliente } from "./Cliente";
import { Producto } from "./Producto";

export class Orden {
  ordenesId: number = NaN;
  cantidad: number = NaN;
  producto: Producto = null;
  productoId: number = NaN;
  cliente: Cliente = null;
  clienteId: number = NaN;
  estado: boolean = false;

  constructor() { }
}

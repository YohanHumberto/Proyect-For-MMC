import { Cliente } from "./Cliente";
import { Producto } from "./Producto";

export class Orden {
  ordenesId: number = NaN;
  cantidad: number = NaN;
  producto: Producto = new Producto();
  productoId: number = NaN;
  cliente: Cliente = new Cliente();
  clienteId: number = NaN;
  estado: boolean = false;

  constructor() { }
}

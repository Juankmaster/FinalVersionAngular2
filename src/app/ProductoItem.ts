import { Productos } from './Productos';

export class ProductoItem {
 producto:Productos;
 cantidad:number;

 subtotal():number{
   return this.producto.precio * this.cantidad;
 }
 constructor(){}
}

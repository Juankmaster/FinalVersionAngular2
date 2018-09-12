import { Injectable  } from '@angular/core';
import { HttpService } from './http.service';
import { Response } from '@angular/http';
import { Productos }   from './Productos';
import { ProductoItem }   from './ProductoItem';
import 'rxjs/Rx';


@Injectable()
export class ProductosService  {

 productos : Productos[];
 productoItem : Object[]=Array();
 cantidad:number;
 itemsCompras:number;

  constructor() { }

    productosCarrito(producto:Productos[], cantidad:number){

        this.productos=producto
        this.cantidad=cantidad
        if(cantidad > 0){

        for (let res of producto){

              let productosI = {
                id:res.id,
                img:res.img,
                nombre:res.nombre,
                precio:res.precio,
                canti:cantidad,
                subtotal:cantidad*res.precio

              }
            this.productoItem.push(productosI)
            this.itemsCompras=this.productoItem.length

        }
}
 }

   // actualizarCarritoItem(tamaño:number){
   //   this.itemsCompras=tamaño;
   //
   //
   // }
 }

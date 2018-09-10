import { Injectable  } from '@angular/core';
import { HttpService } from './http.service';
import { Response } from '@angular/http';
import { Productos }   from './Productos';
import 'rxjs/Rx';


@Injectable()
export class ProductosService  {

 productos : Productos[]=[];
 cantidad:number;
 itemsCompras:number;

  constructor() { }

    productosCarrito(producto:Array<any>, cantidad:number){

          this.productos=producto
          this.itemsCompras=producto.length
            this.cantidad=cantidad

 }

   // actualizarCarritoItem(tamaño:number){
   //   this.itemsCompras=tamaño;
   //
   //
   // }
 }

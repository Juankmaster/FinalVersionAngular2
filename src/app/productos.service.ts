import { Injectable  } from '@angular/core';
import { HttpService } from './http.service';
import { Response } from '@angular/http';
import { Productos }   from './Productos';
import 'rxjs/Rx';


@Injectable()
export class ProductosService  {

 productos : Productos[]=[];

  constructor(public datos : HttpService) { }

    productosCatalogo(){
      this.datos.getProductos()
      .subscribe(
        (data) => {
          this.productos = data
        }

      )
 }
 }

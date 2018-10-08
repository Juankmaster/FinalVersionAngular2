import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs/Rx";
import {Productos} from "./Productos";
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http : Http) { }
  // idProducto:string="1";

    getProductos(){
      return this.http.get('https://tareafinal-8729a.firebaseio.com/productos.json')
        .map((response: Response)=> response.json())
      }

    getUsuarios(){
      return this.http.get('https://tareafinal-8729a.firebaseio.com/usuarios.json')
        .map((response:Response)=> response.json())
      }

    getProductoId(id:string){
      return this.http.get('https://tareafinal-8729a.firebaseio.com/productos/'+id+'.json')
     .map((response : Response)=> response.json())

      }

    putProductoId(producto:Productos) {

      let datos = JSON.stringify(producto);

      let url = "https://tareafinal-8729a.firebaseio.com/productos/"+ producto.id +'.json';

      return this.http.put(
        url,
        producto
      )
     .map((response : Response)=> response.json())
      }

}

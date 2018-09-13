import { Component, OnInit } from '@angular/core';
import {ProductosService } from '../productos.service';
import { Productos } from '../Productos';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  productosCom:Object[]=Array();

  productosActualiza:Productos[]=[];
  total:number=0;

  constructor(private productosCompra:ProductosService,
              private http:HttpService,
              private ruta:Router
             ) { }

  ngOnInit() {

   this.productosCom=this.productosCompra.productoItem
    for(let tot of this.productosCom){
         let aux = parseInt(tot['subtotal'])
         this.total+= aux
    }
}

  realizarCompra(){
      for(let aux of this.productosCompra.productoItems){

          let produc= new Productos;

            produc.id=aux['id'],
            produc.img=aux['img'],
            produc.nombre=aux['nombre'],
            produc.precio=aux['precio'],
            produc.stock=aux['stock']

          this.productosActualiza.push(produc)
      }
          this.http.putProductoId(this.productosActualiza)
          this.ruta.navigate(['/panel'])
           this.productosCompra.productoItem=[]

  }


  cancelarVenta(){
    alert("Super Bien")
  }

}

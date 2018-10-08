import { Component, OnInit } from '@angular/core';
import {ProductosService } from '../productos.service';
import { Response } from '@angular/http';
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
      let contador = this.productosCompra.productoItems.length
    //  console.log(contador)
      for(let aux of this.productosCompra.productoItems){

        let produc= new Productos;
            produc.id=aux['id'],
            produc.img=aux['img'],
            produc.nombre=aux['nombre'],
            produc.precio=aux['precio'],
            produc.stock=aux['stock']

            //this.productosActualiza.push(produc)
            console.log(produc);

            this.http.putProductoId(produc)
            .subscribe(
              (data :Response)  => {
                  console.log(data)
                if(contador === 0){
                  this.ruta.navigate(['/panel'])
                  this.productosCompra.productoItem=[]

                }
              }
          )
           contador--;
      }

  }


  cancelarVenta(){
    alert("Super Bien")
  }

}

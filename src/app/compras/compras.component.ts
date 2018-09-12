import { Component, OnInit } from '@angular/core';
import {ProductosService } from '../productos.service';
import { Productos } from '../Productos';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  productosCom:Object[]=Array();
  total:number=0;

  constructor(private productosCompra:ProductosService) { }

  ngOnInit() {

   this.productosCom=this.productosCompra.productoItem
    for(let tot of this.productosCom){

     this.total+=tot['subtotal']
      console.log(this.total)
    }


}
}

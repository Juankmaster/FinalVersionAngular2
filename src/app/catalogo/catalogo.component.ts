import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Productos } from '../Productos';
import { VarNavComponent } from '../var-nav/var-nav.component';
import {ProductosService } from '../productos.service';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

    producto : Productos[]=[];
    productoFiltrados : Productos[];
    productoSeleccionado : Productos[];
    productoAgregado : Object[]=[];
    campoFiltro:string;
    canProducto:number;

  constructor( private datos : HttpService, private servicio:ProductosService ) {}


    ngOnInit() {

       this.productosCatalogo();
    }

//Metodo para cargar los productos de la base de datos
    productosCatalogo(){
      this.datos.getProductos()
        .subscribe(
          (data) => {
            this.producto = data;
              this.productoFiltrados = this.producto;
              },
                error => {
                  alert("Error al consultar el catálogo de productos");
          }
       )
    }

 //Metodo para filtrar los productos
    filtroProductos(event: any){

      if ( this.campoFiltro.length > 0 ) {
            this.productoFiltrados = this.producto.filter(
             product => product.nombre.toLowerCase().indexOf(this.campoFiltro.toLowerCase()) >= 0
          )
      }else{
            this.productoFiltrados = this.producto;
          }
      }

//Metodo para agregar los productos al carrito
  agregarCarrito(nombre:string){

    if (this.canProducto > 0){
        this.productoSeleccionado = this.producto.filter(
          produc => produc.nombre.indexOf(nombre)>=0
      )
         this.productoAgregado.push(this.productoSeleccionado);
         this.servicio.productosCarrito(this.productoAgregado, this.canProducto)
         this.canProducto=0;

    }else{

        alert("Debe seleccionar minimo una unidad del producto")
    }

}


//Metodo para contar la cantidad de productos
  canProductos(cant:number){
    this.canProducto=cant;
}

  }

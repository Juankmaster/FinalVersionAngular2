import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Productos } from '../Productos';
import { VarNavComponent } from '../var-nav/var-nav.component';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

    producto:Productos[];
    productoFiltrados : Productos[];
    campoFiltro:string;

  constructor( private datos : HttpService ) {}


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

  }

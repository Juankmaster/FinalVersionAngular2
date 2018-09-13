import { Component, OnInit } from '@angular/core';
import {ProductosService } from '../productos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-var-nav',
  templateUrl: './var-nav.component.html',
  styleUrls: ['./var-nav.component.css']
})
export class VarNavComponent implements OnInit {

  items:number;

  constructor(private item:ProductosService, private ruta:Router) {}

  ngOnInit() {

  }
  irProductos(){
    this.item.itemsCompras=0
    this.ruta.navigate(['./compras']);
  }

}

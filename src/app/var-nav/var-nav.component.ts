import { Component, OnInit } from '@angular/core';
import {ProductosService } from '../productos.service';


@Component({
  selector: 'app-var-nav',
  templateUrl: './var-nav.component.html',
  styleUrls: ['./var-nav.component.css']
})
export class VarNavComponent implements OnInit {

  items:number;

  constructor(private item:ProductosService) {}

  ngOnInit() {

  }

}

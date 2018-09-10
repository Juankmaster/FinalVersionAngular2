import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { VarNavComponent } from '../var-nav/var-nav.component';
import { Router } from '@angular/router';
// import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Productos } from '../Productos';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto:Productos[];

  constructor(private http : HttpService, private route: ActivatedRoute) { }

  ngOnInit() {

      this.route.params.subscribe( parametro => {
        let id = parametro['id']
        this.http.getProductoId(id)
          .subscribe(
                   (data)=> {
                    this.producto=data;

           }
        )
    });
  }

}

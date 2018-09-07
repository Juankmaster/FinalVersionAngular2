import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: '',
    password: ''
  };

  usuarioValido = true
  passwordValido = true
  loginValido= true


  constructor(private router: Router, private http : HttpService) { }

  ngOnInit() {}

  submitForm(form) {

    let validForm = true

    if (this.user.username == "") {
      this.usuarioValido = false
      validForm = false
    } else {
      this.usuarioValido = true
    }

    if (this.user.password == "") {
      this.passwordValido = false
      validForm = false
    } else {
      this.passwordValido = true
    }

    if (validForm) {
        this.validarUsuario();
      }
  }

  //Metodo para Validar usuarios
  validarUsuario() {
       this.http.getUsuarios()
        .subscribe(
          (data) => {

          for ( let users of data ) {

              if(this.user.username == users.email && this.user.password == users.clave) {
                  this.loginValido=true
                  this.router.navigate(['./panel']);

            }else{
                    this.loginValido=false
                    this.user.username=''
                    this.user.password=''
            }
          }
        }
      )
    }


}

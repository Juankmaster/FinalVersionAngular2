import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
// import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VarNavComponent } from './var-nav/var-nav.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ComprasComponent } from './compras/compras.component';


import { HttpService } from './http.service';
import { ProductosService } from './productos.service';
import { ProductoComponent } from './producto/producto.component';
import { PanelComponent } from './panel/panel.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VarNavComponent,
    CatalogoComponent,
    ComprasComponent,
    ProductoComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

  ],
  providers: [HttpService, ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

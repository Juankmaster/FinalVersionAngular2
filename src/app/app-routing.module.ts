import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { CatalogoComponent} from './catalogo/catalogo.component';
import { ComprasComponent} from './compras/compras.component';
import { ProductoComponent } from './producto/producto.component';
import { PanelComponent } from './panel/panel.component';
// import { VarNavComponent } from './var-nav/var-nav.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login',component:LoginComponent},
  {path: 'panel',component:PanelComponent},
  {path: 'catalogo',component:CatalogoComponent},
  {path: 'compras',component:ComprasComponent},
  {path: 'producto/:id',component:ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

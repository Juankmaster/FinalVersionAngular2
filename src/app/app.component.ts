import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CatalogoComponent} from './catalogo/catalogo.component';
import { ComprasComponent} from './compras/compras.component';
import { VarNavComponent } from './var-nav/var-nav.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}

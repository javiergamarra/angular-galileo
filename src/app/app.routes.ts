import {Routes} from '@angular/router';
import {TrayectoComponent} from './trayecto/trayecto.component';
import {OrigenComponent} from './origen/origen.component';
import {MapaComponent} from './mapa/mapa.component';
import {ViajeroComponent} from './viajero/viajero.component';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [
  {path: '', component: OrigenComponent},
  {path: 'trayecto', component: TrayectoComponent},
  {path: 'mapa/:id', component: MapaComponent},
  {path: 'viajero', component: ViajeroComponent},
  {path: 'login', component: LoginComponent},
];

import {Routes} from '@angular/router';
import {TrayectoComponent} from './trayecto/trayecto.component';
import {OrigenComponent} from './origen/origen.component';
import {MapaComponent} from './mapa/mapa.component';
import {ViajeroComponent} from './viajero/viajero.component';

export const routes: Routes = [
  {path: '', component: OrigenComponent},
  {path: 'trayecto', component: TrayectoComponent},
  {path: 'mapa/:id', component: MapaComponent},
  {path: 'viajero', component: ViajeroComponent},
];

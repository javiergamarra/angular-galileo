import {Routes} from '@angular/router';
import {TrayectoComponent} from './trayecto/trayecto.component';
import {OrigenComponent} from './origen/origen.component';

export const routes: Routes = [
  {path: '', component: OrigenComponent},
  {path: 'trayecto', component: TrayectoComponent},
];

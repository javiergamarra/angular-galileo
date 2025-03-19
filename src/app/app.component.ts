import { Component } from '@angular/core';
import {TrayectoComponent} from './trayecto/trayecto.component';

@Component({
  selector: 'app-root',
  imports: [TrayectoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-galileo';
}

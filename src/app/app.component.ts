import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TrayectoComponent} from './trayecto/trayecto.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TrayectoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-galileo';
}

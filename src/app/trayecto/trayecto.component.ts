import {Component} from '@angular/core';

@Component({
  selector: 'app-trayecto',
  imports: [],
  templateUrl: './trayecto.component.html',
  styleUrl: './trayecto.component.css'
})
export class TrayectoComponent {

  viajero = {nombre: "Javier"};

  constructor() {
    setInterval(() => {
      this.viajero.nombre = '' + Math.random();
    }, 2000)
  }

  enviar() {
    console.log('Enviando...');
  }
}

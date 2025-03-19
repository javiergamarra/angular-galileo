import {Component} from '@angular/core';

@Component({
  selector: 'app-trayecto',
  imports: [],
  templateUrl: './trayecto.component.html',
  styleUrl: './trayecto.component.css'
})
export class TrayectoComponent {

  viajero = {nombre: ''};

  constructor() {
  }

  enviar() {
    console.log(this.viajero);
  }

  nombre($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement
    this.viajero.nombre = element.value;
  }

}

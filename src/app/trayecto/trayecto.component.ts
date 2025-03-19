import {Component} from '@angular/core';

@Component({
  selector: 'app-trayecto',
  imports: [],
  templateUrl: './trayecto.component.html',
  styleUrl: './trayecto.component.css'
})
export class TrayectoComponent {

  viajero = {nombre: '', apellido1: ''};

  constructor() {
  }

  enviar() {
    console.log(this.viajero);
  }

  nombre($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement
    this.viajero.nombre = element.value;
  }

  apellido1($event: KeyboardEvent) {
    this.viajero.apellido1 = ($event.target as HTMLInputElement).value;
  }

}

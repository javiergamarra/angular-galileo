import {Component} from '@angular/core';
import {TrenComponent} from '../tren/tren.component';
import {Localidad, OrigenComponent} from '../origen/origen.component';
import {AsyncPipe, DatePipe} from '@angular/common';
import {TrenesService} from '../trenes.service';

@Component({
  selector: 'app-trayecto',
  imports: [
    TrenComponent,
    OrigenComponent,
    DatePipe,
    AsyncPipe
  ],
  templateUrl: './trayecto.component.html',
  styleUrl: './trayecto.component.css'
})
export class TrayectoComponent {

  viajero = {nombre: '', apellido1: '', fechaNacimiento: new Date()};

  trenes$?: Promise<any>

  constructor(private trenesService: TrenesService) {
    this.trenes$ = this.trenesService.getTrenes();
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

  filtrarTrenes($event: Localidad) {
    console.log($event);
  }
}

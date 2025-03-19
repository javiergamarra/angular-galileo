import {Component, EventEmitter, Output} from '@angular/core';

const LOCALIDADES = [{id: 1, name: 'Madrid'}, {id: 2, name: 'Barcelona'}]

@Component({
  selector: 'app-origen',
  imports: [],
  template: `
    <label>Ciudad origen:</label>
    <input (keyup)="origen($event)" placeholder="Origen" [value]="localidadSeleccionada?.name">


    @for (localidad of localidades; track localidad.id) {
      <p (click)="seleccionar(localidad)">{{ localidad.name }}</p>
    }
  `,
  styleUrl: './origen.component.css'
})
export class OrigenComponent {

  @Output()
  localidad: EventEmitter<Localidad> = new EventEmitter();

  localidadSeleccionada?: Localidad

  origen(event: any) {
    this.localidades = LOCALIDADES.filter(value => value.name.toLowerCase().includes(event.target.value.toLowerCase()));
  }

  localidades = LOCALIDADES

  seleccionar(localidad: { id: number; name: string }) {
    console.log(localidad);
    this.localidadSeleccionada = localidad;
    this.localidad.emit(localidad);
  }
}

export interface Localidad {
  id: number;
  name: string
}

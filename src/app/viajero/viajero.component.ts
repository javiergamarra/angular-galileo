import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-viajero',
  imports: [
    FormsModule
  ],
  template: `
    <form #f="ngForm" (ngSubmit)="submit(f)">
      <label>Nombre:</label>
      <input type="text" name="nombre" ngModel>

      <button>Enviar!</button>

    </form>

  `,
  styleUrl: './viajero.component.css'
})
export class ViajeroComponent {

  submit(f: any) {
    console.log(f);
  }
}

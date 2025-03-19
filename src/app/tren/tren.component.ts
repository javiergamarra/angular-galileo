import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tren',
  imports: [],
  template: `
    <p>
      <label>{{ tren.nombre }}</label>
    </p>`,
  styleUrl: './tren.component.css'
})
export class TrenComponent {

  @Input()
  tren = {nombre: '', id: 0};

}

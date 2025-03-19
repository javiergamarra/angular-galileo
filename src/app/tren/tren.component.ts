import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tren',
  imports: [],
  template: `
    <p>
      <label>{{ tren.name }}</label>
    </p>`,
  styleUrl: './tren.component.css'
})
export class TrenComponent {

  @Input()
  tren = {name: '', id: 0};

}

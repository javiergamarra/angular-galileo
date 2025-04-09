import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-login2',
  imports: [],
  template: `
    <input (keyup)="enviar($event)">

  `,
  styleUrl: './login2.component.css'
})
export class Login2Component {

  usuario = signal('');

  enviar($event: any) {
    this.usuario.set($event.target.value);
    console.log(this.usuario());
  }
}

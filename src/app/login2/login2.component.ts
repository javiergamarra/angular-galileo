import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-login2',
  imports: [],
  template: `
    <input (keyup)="enviar($event)">

    {{ usuarioMayusculas() }}
  `,
  styleUrl: './login2.component.css'
})
export class Login2Component {

  usuario = signal('');
  usuarioMayusculas

  constructor() {
    this.usuarioMayusculas = computed(() => this.usuario().toUpperCase())
  }

  enviar($event: any) {
    this.usuario.set($event.target.value);
    console.log(this.usuario());
  }
}

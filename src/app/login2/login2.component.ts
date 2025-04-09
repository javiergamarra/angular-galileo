import {Component, computed, effect, resource, signal} from '@angular/core';
import {TrenesService} from '../trenes.service';

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

  trenesResource
  trenes

  constructor(private trenesService: TrenesService) {
    this.usuarioMayusculas = computed(() => this.usuario().toUpperCase())

    this.trenesResource = resource({
      loader: () => {
        return this.trenesService.getTrenes();
      }
    });

    effect(() => {
      console.log("Value: ", this.trenesResource.value());
      console.log("Status: ", this.trenesResource.status());
      console.log("Error: ", this.trenesResource.error());
    })

    this.trenes = computed(() => this.trenesResource.value())
  }

  enviar($event: any) {
    this.usuario.set($event.target.value);
    console.log(this.usuario());
  }
}

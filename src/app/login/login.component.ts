import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  template: `
    <form [formGroup]="form">
      <label>Usuario</label>
      <input name="usuario" formControlName="usuario">


      <button (click)="enviar()">Login</button>

    </form>

    <input [(ngModel)]="banana">
  `,
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public form: FormGroup

  banana = 'hola'

  constructor(private fb: FormBuilder) {

    setInterval(() => {
      console.log(this.banana);
      this.banana = 'hola'
    }, 1000);


    this.form = this.fb.group({
      usuario: this.fb.nonNullable.control("", {
        validators: [Validators.required, Validators.email],
      }),
      password: ['', [Validators.required]]
    });
  }

  enviar() {
    console.log(this.form);
  }
}

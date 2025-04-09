import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule
  ],
  template: `
    <form [formGroup]="form">
      <label>Usuario</label>
      <input name="usuario" formControlName="usuario">

      <button (click)="enviar()">Login</button>

    </form>
  `,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public form: FormGroup

  constructor(private fb: FormBuilder) {
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

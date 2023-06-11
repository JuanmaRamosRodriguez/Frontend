import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../service/registro/registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component{

  nombre!: string;
  telefono!: string;
  email!: string;
  password!: string;

  constructor(private registroService: RegistroService, private router: Router) { }

  submitForm() {
    if (this.nombre && this.telefono && this.email && this.password) {
      this.registroService.enviarDatos(this.nombre, this.telefono, this.email, this.password)
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(['/inicio-page']);
          },
          error => {
            console.error(error);
          }
        );
    } else {
      console.log('Por favor, complete todos los campos para entrar');
    }
  }
}

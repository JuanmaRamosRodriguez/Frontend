import { LoginService } from './../../service/login/login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: string;
  password!: string;

  constructor(private loginService: LoginService, private router: Router) { }

  submitForm() {
    if (this.email && this.password) {
      this.loginService.enviarDatos(this.email, this.password)
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
      console.log('Rellene los campos para acceder');
    }
  }
}

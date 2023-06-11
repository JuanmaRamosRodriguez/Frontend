import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AN1';
  constructor(private http: HttpClient) { }

  onSubmit(formulario: any) {
    const datosJson = JSON.stringify(formulario.value);

    this.http.post('https://aniku.onrender.com/usuarios', datosJson)
      .subscribe(
        (respuesta) => {
          console.log(respuesta);
        },
        (error) => {
          console.error(error);
        }
      );

   /* this.http.delete('https://aniku.onrender.com/usuarios')
    .subscribe(
      (respuesta) => {
        console.log(respuesta);
      },
      (error) => {
        console.error(error);
      }
    );

  }*/
 }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  enviarDatos(email: string, password: string) {
    const datos = {
      email: email,
      password: password
    };
  console.log(datos);

  return this.http.post("https://aniku.onrender.com/login", datos );
  }
}

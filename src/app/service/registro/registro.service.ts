import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RegistroService {
  eliminarUsuario() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  enviarDatos(nombre: string, telefono: string, email: string, password: string) {
    const datos = {
      name: nombre,
      telephone: telefono,
      email: email,
      password: password
    };
  console.log(datos);

  return this.http.post("https://aniku.onrender.com/usuarios", datos );
  }
}

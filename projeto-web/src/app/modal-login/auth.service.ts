import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();
  mostrarButtonEmitter = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  urlAuth = 'http://localhost:8080/auth';

  fazerLogin(usuario: Usuario){

    let obj = {
      "user": usuario.username,
      "pass": usuario.password
    }

    this.http.post(this.urlAuth, obj).subscribe(
      response => {
        console.log(response);
        if(response[0] != undefined){
          localStorage.setItem('userId', response[0].id);
          this.usuarioAutenticado = true;
          this.mostrarMenuEmitter.emit(true);
          this.mostrarButtonEmitter.emit(false);
        }
      }
    );

    /*if(usuario.username === "mario" && usuario.password === "12345"){
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }*/
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}

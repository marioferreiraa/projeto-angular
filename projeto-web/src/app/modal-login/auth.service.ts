import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor() { }

  fazerLogin(usuario: Usuario){
    if(usuario.username === "mario" && usuario.password === "12345"){
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}

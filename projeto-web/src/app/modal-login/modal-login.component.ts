import { Component, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from './auth.service';
import { Usuario } from '../model/Usuario';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})

export class ModalLoginComponent{

  private usuario: Usuario = new Usuario();

  modalTitle: string;
  labelLogin: string;
  labelClose: string;  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private authService: AuthService) { 
    this.modalTitle = data.title;
    this.labelLogin = data.labelLogin;
    this.labelClose = data.labelClose;
    console.log(data)
  }

  fazerLogin(){
    console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
  }

}

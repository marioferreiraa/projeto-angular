import { Component, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent{

  modalTitle: string;
  labelLogin: string;
  labelClose: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.modalTitle = data.title;
    this.labelLogin = data.labelLogin;
    this.labelClose = data.labelClose;
    console.log(data)
  }

}

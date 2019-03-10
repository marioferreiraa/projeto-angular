import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ModalLoginComponent } from './modal-login/modal-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(public dialog: MatDialog){}
  title = 'Helô World';
}

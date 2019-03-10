import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MatDialog, MatDialogConfig } from '@angular/material';
import { ModalLoginComponent } from '../modal-login/modal-login.component';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) {}
  
  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';
    dialogConfig.data = {
      id: 1,
      title: 'Insira suas credenciais',
      labelLogin: "Login",
      labelClose: "X"
    };
    const dialogRef = this.dialog.open(ModalLoginComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed')
      console.log(result)
    });
  }

  onNoClick(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(ModalLoginComponent, dialogConfig);
    dialogRef.close();
  }
  
}

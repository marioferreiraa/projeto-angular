import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { ModalCadastroComponent } from './modal-cadastro/modal-cadastro.component';
import { AuthService } from './modal-login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    mostrarMenu: boolean = false;
    mostrarBotoes: boolean = true;

    constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog, private authService: AuthService) {

    }

    ngOnInit(){
      this.authService.mostrarMenuEmitter.subscribe(
        mostrar => this.mostrarMenu = mostrar
      );
      this.authService.mostrarButtonEmitter.subscribe(
        mostrar => this.mostrarBotoes = mostrar
      );
    }
  
    openModalLogin() {
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

    openModalCadastro() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '600px';
      dialogConfig.data = {
        id: 2,
        title: 'Insira os seus dados para o Cadastro',
        labelCadastro: "Cadastre-se",
        labelClose: "X"
      }
      const dialogRef = this.dialog.open(ModalCadastroComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog was closed');
        console.log(result);
      });
    }
  
    onNoClick(): void {
      const dialogConfig = new MatDialogConfig();
      const dialogRef = this.dialog.open(ModalLoginComponent, dialogConfig);
      dialogRef.close();
    }
}

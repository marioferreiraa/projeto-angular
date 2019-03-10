import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { MatInputModule } from '@angular/material/input';
import { FormCadastroClienteComponent } from './form-cadastro-cliente/form-cadastro-cliente.component';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    ModalLoginComponent,
    FormCadastroClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
   ModalLoginComponent
  ]
})
export class AppModule { }

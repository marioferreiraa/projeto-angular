import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { MatInputModule } from '@angular/material/input';
import { FormCadastroClienteComponent } from './form-cadastro-cliente/form-cadastro-cliente.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormCadastroProdutoComponent } from './form-cadastro-produto/form-cadastro-produto.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { FormCadastroEntregadorComponent } from './form-cadastro-entregador/form-cadastro-entregador.component';
import { ModalCadastroComponent } from './modal-cadastro/modal-cadastro.component';
import { AuthService } from './modal-login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CardapioComponent } from './cardapio/cardapio.component';
import {MatCardModule} from '@angular/material/card';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    ModalLoginComponent,
    FormCadastroClienteComponent,
    FormCadastroProdutoComponent,
    HomeDashboardComponent,
    FormCadastroEntregadorComponent,
    ModalCadastroComponent,
    CardapioComponent,
    MinhaContaComponent
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
    MatGridListModule,
    routing,
    FormsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [
   ModalLoginComponent,
   ModalCadastroComponent
  ]
})
export class AppModule { }

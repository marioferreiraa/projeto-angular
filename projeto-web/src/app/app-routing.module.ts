import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { FormCadastroClienteComponent } from './form-cadastro-cliente/form-cadastro-cliente.component';
import { FormCadastroProdutoComponent } from './form-cadastro-produto/form-cadastro-produto.component';
import { FormCadastroEntregadorComponent } from './form-cadastro-entregador/form-cadastro-entregador.component';
import { AuthGuard } from './guards/auth.guard';
import { CardapioComponent } from './cardapio/cardapio.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';

const appRoutes: Routes = [
  {path:'', component: HomeDashboardComponent},
  { path:'pedido',
    component: CardapioComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'minha-conta',
    component: MinhaContaComponent,
    canActivate: [AuthGuard]
  },
  { 
    path:'inserir-cliente',
    component: FormCadastroClienteComponent, 
    canActivate: [AuthGuard]
  },
  { 
    path:'inserir-produto',
    component: FormCadastroProdutoComponent, 
    canActivate: [AuthGuard]
  },
  {
    path:'inserir-entregador',
    component: FormCadastroEntregadorComponent,
    canActivate: [AuthGuard]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

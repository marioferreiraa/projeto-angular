import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { FormCadastroClienteComponent } from './form-cadastro-cliente/form-cadastro-cliente.component';
import { FormCadastroProdutoComponent } from './form-cadastro-produto/form-cadastro-produto.component';

const routes: Routes = [
  {path:'', component: HomeDashboardComponent},
  {path:'inserir-cliente', component: FormCadastroClienteComponent},
  {path:'inserir-produto', component: FormCadastroProdutoComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

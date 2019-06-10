import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-cadastro-cliente',
  templateUrl: './form-cadastro-cliente.component.html',
  styleUrls: ['./form-cadastro-cliente.component.scss']
})
export class FormCadastroClienteComponent implements OnInit {

  labelCadastrarCliente:string;

  constructor() {
    this.labelCadastrarCliente = 'Cadastrar';
  }

  ngOnInit() {
  }

}

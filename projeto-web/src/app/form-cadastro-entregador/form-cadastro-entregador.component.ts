import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-cadastro-entregador',
  templateUrl: './form-cadastro-entregador.component.html',
  styleUrls: ['./form-cadastro-entregador.component.scss']
})
export class FormCadastroEntregadorComponent implements OnInit {

  labelCadastrarEntregador:string;

  constructor() {
    this.labelCadastrarEntregador = 'Cadastrar';
  }

  ngOnInit() {
  }

}

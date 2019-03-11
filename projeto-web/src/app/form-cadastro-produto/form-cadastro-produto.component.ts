import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-cadastro-produto',
  templateUrl: './form-cadastro-produto.component.html',
  styleUrls: ['./form-cadastro-produto.component.scss']
})
export class FormCadastroProdutoComponent implements OnInit {

  labelCadastrarProduto:string;

  constructor() {
    this.labelCadastrarProduto = 'Cadastrar';
  }

  ngOnInit() {
  }

}

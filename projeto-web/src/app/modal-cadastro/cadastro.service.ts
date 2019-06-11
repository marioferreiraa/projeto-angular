import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  id: Number;
  statusCliente: Object;
  statusAuth: Object;

  constructor(private http: HttpClient) { }

  urlClient = 'http://localhost:8080/cliente/';
  urlAuth = 'http://localhost:8080/login/';

  create(cliente: Cliente) {

    this.http.get<any[]>(`${this.urlClient+'nextid'}`).subscribe(dados => this.id = dados[0].id);

    let dataCliente = {
      "nome": cliente.nome,
      "telefone": cliente.telefone,
      "cep": cliente.cep,
      "rua": cliente.rua,
      "numero": cliente.numero,
      "referencia": cliente.referencia
    }

    let dataAuth = {
      "id": this.id,
      "username": cliente.username,
      "password": cliente.password,
      "type": "cliente"
    }

    this.statusCliente = this.http.post(this.urlClient, dataCliente);
    this.statusAuth = this.http.post(this.urlAuth, dataAuth);
  }

}

import { Usuario } from './Usuario';

export class Cliente extends Usuario{
    nome: string;
    telefone: string;
    cep: string;
    rua: string;
    numero: number;
    referencia: string;
    username: string;
    password: string;
}
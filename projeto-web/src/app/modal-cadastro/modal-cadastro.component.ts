import { Component, Inject } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, ErrorStateMatcher } from '@angular/material';
import { CadastroService } from './cadastro.service';
import { Cliente } from '../model/Cliente';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-modal-cadastro',
  templateUrl: './modal-cadastro.component.html',
  styleUrls: ['./modal-cadastro.component.scss']
})

// export class InputErrorStateMatcherExample {
//   emailFormControl = new FormControl('', [
//     Validators.required,
//     Validators.email,
//   ]);

//   matcher = new MyErrorStateMatcher();
// }

export class ModalCadastroComponent{

  private cliente: Cliente = new Cliente();

  modalTitle:string;
  labelCadastro:string;
  labelClose:string;

  formulario: FormGroup;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private cadastroService: CadastroService) { 
    this.modalTitle = data.title;
    this.labelCadastro = data.labelCadastro;
    this.labelClose = data.labelClose;
  }

  ngOnInit() {
  }

  cadastrar(){
    this.cadastroService.create(this.cliente).subscribe(
      response => {
        let dataAuth = {
          "id": parseInt(response.toString()),
          "username": this.cliente.username,
          "password": this.cliente.password,
          "type": "cliente"
        }

        this.cadastroService.createAuth(dataAuth).subscribe(
          success => {
            alert("Cliente inserido com sucesso, e login e senha criados no banco!")
          },
          error => console.error("Erro ao tentar inserir aautenticação")
        );

      },
      error => console.error("Erro ao tentar inserir o cliente"),
      () => console.log("OK")
    );
  }

}

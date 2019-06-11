import { Component, Inject } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
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
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private cadastroService: CadastroService) { 
    this.modalTitle = data.title;
    this.labelCadastro = data.labelCadastro;
    this.labelClose = data.labelClose;
  }

  ngOnInit() {
  }

  cadastrar(){
    console.log(this.cliente);
    this.cadastroService.create(this.cliente);
  }

}

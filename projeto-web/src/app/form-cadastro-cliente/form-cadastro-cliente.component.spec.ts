import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastroClienteComponent } from './form-cadastro-cliente.component';

describe('FormCadastroClienteComponent', () => {
  let component: FormCadastroClienteComponent;
  let fixture: ComponentFixture<FormCadastroClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCadastroClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCadastroClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

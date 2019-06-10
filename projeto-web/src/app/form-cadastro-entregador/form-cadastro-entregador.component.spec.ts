import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastroEntregadorComponent } from './form-cadastro-entregador.component';

describe('FormCadastroEntregadorComponent', () => {
  let component: FormCadastroEntregadorComponent;
  let fixture: ComponentFixture<FormCadastroEntregadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCadastroEntregadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCadastroEntregadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

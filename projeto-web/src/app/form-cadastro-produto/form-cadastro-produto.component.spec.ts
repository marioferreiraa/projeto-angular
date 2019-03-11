import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastroProdutoComponent } from './form-cadastro-produto.component';

describe('FormCadastroProdutoComponent', () => {
  let component: FormCadastroProdutoComponent;
  let fixture: ComponentFixture<FormCadastroProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCadastroProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCadastroProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

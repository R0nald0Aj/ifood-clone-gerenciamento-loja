import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosLojaComponent } from './dados-loja.component';

describe('DadosLojaComponent', () => {
  let component: DadosLojaComponent;
  let fixture: ComponentFixture<DadosLojaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadosLojaComponent]
    });
    fixture = TestBed.createComponent(DadosLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

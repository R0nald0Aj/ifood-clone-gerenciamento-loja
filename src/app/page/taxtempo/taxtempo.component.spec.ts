import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxtempoComponent } from './taxtempo.component';

describe('TaxtempoComponent', () => {
  let component: TaxtempoComponent;
  let fixture: ComponentFixture<TaxtempoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxtempoComponent]
    });
    fixture = TestBed.createComponent(TaxtempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

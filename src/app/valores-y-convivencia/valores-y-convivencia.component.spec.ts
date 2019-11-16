import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoresYConvivenciaComponent } from './valores-y-convivencia.component';

describe('ValoresYConvivenciaComponent', () => {
  let component: ValoresYConvivenciaComponent;
  let fixture: ComponentFixture<ValoresYConvivenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoresYConvivenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoresYConvivenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

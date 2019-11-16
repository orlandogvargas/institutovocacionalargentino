import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoSolidarioComponent } from './proyecto-solidario.component';

describe('ProyectoSolidarioComponent', () => {
  let component: ProyectoSolidarioComponent;
  let fixture: ComponentFixture<ProyectoSolidarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoSolidarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoSolidarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

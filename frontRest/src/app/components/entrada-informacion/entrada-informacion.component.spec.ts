import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaInformacionComponent } from './entrada-informacion.component';

describe('EntradaInformacionComponent', () => {
  let component: EntradaInformacionComponent;
  let fixture: ComponentFixture<EntradaInformacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradaInformacionComponent]
    });
    fixture = TestBed.createComponent(EntradaInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

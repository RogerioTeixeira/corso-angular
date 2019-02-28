import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioProdottiComponent } from './dettaglio-prodotti.component';

describe('DettaglioProdottiComponent', () => {
  let component: DettaglioProdottiComponent;
  let fixture: ComponentFixture<DettaglioProdottiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioProdottiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioProdottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

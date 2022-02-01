import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarJogoComponent } from './gerenciar-jogo.component';

describe('GerenciarJogoComponent', () => {
  let component: GerenciarJogoComponent;
  let fixture: ComponentFixture<GerenciarJogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciarJogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarJogoComponent } from './adicionar-jogo.component';

describe('AdicionarJogoComponent', () => {
  let component: AdicionarJogoComponent;
  let fixture: ComponentFixture<AdicionarJogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarJogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoJogoComponent } from './info-jogo.component';

describe('InfoJogoComponent', () => {
  let component: InfoJogoComponent;
  let fixture: ComponentFixture<InfoJogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoJogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

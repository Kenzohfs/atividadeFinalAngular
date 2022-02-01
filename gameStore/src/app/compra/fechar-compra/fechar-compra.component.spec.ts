import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FecharCompraComponent } from './fechar-compra.component';

describe('FecharCompraComponent', () => {
  let component: FecharCompraComponent;
  let fixture: ComponentFixture<FecharCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FecharCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FecharCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

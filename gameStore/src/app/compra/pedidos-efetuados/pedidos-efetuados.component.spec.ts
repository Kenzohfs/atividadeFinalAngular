import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosEfetuadosComponent } from './pedidos-efetuados.component';

describe('PedidosEfetuadosComponent', () => {
  let component: PedidosEfetuadosComponent;
  let fixture: ComponentFixture<PedidosEfetuadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosEfetuadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosEfetuadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

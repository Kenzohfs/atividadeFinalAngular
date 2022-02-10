import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PedidosEfetuadosComponent } from './pedidos-efetuados/pedidos-efetuados.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarrinhoComponent, PedidosEfetuadosComponent],
  exports: [CarrinhoComponent, PedidosEfetuadosComponent]
})
export class CompraModule { }

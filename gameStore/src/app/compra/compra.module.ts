import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FecharCompraComponent } from './fechar-compra/fechar-compra.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarrinhoComponent, FecharCompraComponent]
})
export class CompraModule { }

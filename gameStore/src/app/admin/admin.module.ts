import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciarJogoComponent } from './gerenciar-jogo/gerenciar-jogo.component';
import { AdicionarJogoComponent } from './adicionar-jogo/adicionar-jogo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GerenciarJogoComponent, AdicionarJogoComponent]
})
export class AdminModule { }

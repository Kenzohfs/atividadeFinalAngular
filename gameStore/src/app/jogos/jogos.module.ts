import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaJogosComponent } from './lista-jogos/lista-jogos.component';
import { InfoJogoComponent } from './info-jogo/info-jogo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListaJogosComponent, InfoJogoComponent]
})
export class JogosModule { }

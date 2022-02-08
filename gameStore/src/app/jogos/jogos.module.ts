import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaJogosComponent } from './lista-jogos/lista-jogos.component';
import { InfoJogoComponent } from './info-jogo/info-jogo.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListaJogosComponent, InfoJogoComponent, HomepageComponent]
})
export class JogosModule { }

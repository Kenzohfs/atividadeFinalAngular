import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { ListaJogosComponent } from './lista-jogos/lista-jogos.component';
import { InfoJogoComponent } from './info-jogo/info-jogo.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    CommonModule,
    FormsModule
  ],
  declarations: [ListaJogosComponent, InfoJogoComponent, HomepageComponent],
  exports: [ListaJogosComponent, InfoJogoComponent, HomepageComponent]
})
export class JogosModule { }

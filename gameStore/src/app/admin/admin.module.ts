import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdicionarJogoComponent } from './adicionar-jogo/adicionar-jogo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdicionarJogoComponent],
  exports: [AdicionarJogoComponent]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdicionarJogoComponent } from './adicionar-jogo/adicionar-jogo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AdicionarJogoComponent],
  exports: [AdicionarJogoComponent]
})
export class AdminModule { }

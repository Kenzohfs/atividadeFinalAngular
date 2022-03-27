import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdicionarJogoComponent } from './adicionar-jogo/adicionar-jogo.component';
import { FormsModule } from '@angular/forms';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    CommonModule,
    FormsModule
  ],
  declarations: [AdicionarJogoComponent],
  exports: [AdicionarJogoComponent]
})
export class AdminModule { }

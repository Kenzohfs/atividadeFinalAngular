import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    
  }
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LogInComponent, SignUpComponent],
  exports: [LogInComponent, SignUpComponent]
})
export class LoginModule { }

import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LogInComponent, SignUpComponent],
  exports: [LogInComponent, SignUpComponent]
})
export class LoginModule { }

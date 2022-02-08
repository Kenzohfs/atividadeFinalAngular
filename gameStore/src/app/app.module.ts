import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HomepageComponent } from './jogos/homepage/homepage.component';

const rotas: Routes = [
  { path: '', component: HomepageComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
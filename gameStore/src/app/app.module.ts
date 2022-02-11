import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HomepageComponent } from './jogos/homepage/homepage.component';
import { LogInComponent } from './login/log-in/log-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { ListaJogosComponent } from './jogos/lista-jogos/lista-jogos.component';
import { InfoJogoComponent } from './jogos/info-jogo/info-jogo.component';
import { CarrinhoComponent } from './compra/carrinho/carrinho.component';
import { PedidosEfetuadosComponent } from './compra/pedidos-efetuados/pedidos-efetuados.component';
import { AdicionarJogoComponent } from './admin/adicionar-jogo/adicionar-jogo.component';
import { JogosModule } from './jogos/jogos.module';
import { AdminModule } from './admin/admin.module';
import { CompraModule } from './compra/compra.module';
import CheckLogged from './checkLogged.canactivate';
import { FormsModule } from '@angular/forms';

const rotas: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'jogos', children: [
      { path: '', component: ListaJogosComponent },
      { path: ':codigo', component: InfoJogoComponent }
    ]
  },
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'carrinho', component: CarrinhoComponent, canActivate: [CheckLogged] },
  { path: 'pedidos', component: PedidosEfetuadosComponent, canActivate: [CheckLogged] },
  { path: 'adicionar-jogo', component: AdicionarJogoComponent, canActivate: [CheckLogged] }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(rotas);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoginModule,
    JogosModule,
    AdminModule,
    CompraModule,
    LoginModule,
    routing
  ],
  providers: [CheckLogged],
  bootstrap: [AppComponent]
})
export class AppModule { }
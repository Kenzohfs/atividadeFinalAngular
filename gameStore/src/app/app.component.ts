import { Component } from '@angular/core';

import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gameStore';

  constructor(private usuarioService: UsuarioService) {
    fetch('/api/listar-generos', {method: 'POST'}).then((dados: any) => {
      dados.json().then((e: any) => {
        localStorage.setItem("GENEROS", JSON.stringify(e));
      })
    })
  }

  mostrarNavbar() {
    if (window.location.pathname != '/login' && window.location.pathname != '/signup') {
      return true;
    } else {
      return false;
    }
  }

  redirecionar(caminho) {
    console.log("caminho home: ", caminho);
    this.usuarioService.redirecionamento(caminho);
  }
}

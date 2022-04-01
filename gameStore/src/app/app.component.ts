import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gameStore';

  constructor(private router: Router) {
    this.getListaGeneros();
  }

  adicionarjogo() {
    if(localStorage.getItem('ADMIN') == 'TRUE') {
      return true;
    } else {
      return false;
    }
  }

  getListaGeneros() {
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
    localStorage.setItem("CAMINHO", caminho);
    localStorage.setItem('PASTCAMINHO', window.location.pathname);
    this.router.navigate([caminho]);
    console.log("redirecionamento service: ", localStorage.getItem('CAMINHO'));
  }

  sair() {
    localStorage.clear();
    this.getListaGeneros();
    this.router.navigate(['/login']);
  }
}

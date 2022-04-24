import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit() {
  }

  adicionarjogo() {
    if (localStorage.getItem('ADMIN') == 'TRUE') {
      return true;
    } else {
      return false;
    }
  }

  usuarioLogado() {
    if (localStorage.getItem("USUARIO") == "true") {
      return true;
    } else {
      return false;
    }
  }

  redirecionar(caminho) {
    localStorage.setItem("CAMINHO", caminho);
    localStorage.setItem('PASTCAMINHO', window.location.pathname);
    this.router.navigate([caminho]);
  }

  sair() {
    let listaJogos = localStorage.getItem("LISTAJOGOS");
    localStorage.clear();
    localStorage.setItem("LISTAJOGOS", listaJogos);
    this.adminService.getListaGeneros();
    this.router.navigate(['/login']);
  }
}

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

  mostrarNavbar() {
    let path = window.location.pathname;
    if (path != '/login' && path != '/signup' ) {
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
    console.log("caminho home: ", caminho);
    localStorage.setItem("CAMINHO", caminho);
    localStorage.setItem('PASTCAMINHO', window.location.pathname);
    this.router.navigate([caminho]);
    console.log("redirecionamento service: ", localStorage.getItem('CAMINHO'));
  }

  sair() {
    localStorage.clear();
    this.adminService.getListaGeneros();
    this.router.navigate(['/login']);
  }
}

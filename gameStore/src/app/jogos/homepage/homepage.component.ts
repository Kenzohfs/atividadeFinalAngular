import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminService } from 'src/app/services/admin.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  listaJogos = JSON.parse(localStorage.getItem("LISTAJOGOS")) || [];

  constructor(
    private usuarioService: UsuarioService, private router: Router, private adminService: AdminService
  ) { }

  ngOnInit() {
    localStorage.setItem('CAMINHO', '');
  }

  returnListaJogosLength() {
    this.listaJogos = JSON.parse(localStorage.getItem("LISTAJOGOS"))
    return true;
  }

  getJogo(indice) {
    return this.listaJogos[indice];
  }

  getPreco(preco) {
    if (preco == 0) {
      return "Grátis";
    } else {
      return preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }
  }

  redirecionamento(jogoCodigo) {
    this.router.navigate(['/jogos/' + jogoCodigo])
  }
}

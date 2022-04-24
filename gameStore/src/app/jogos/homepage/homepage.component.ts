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
    this.listaJogos = JSON.parse(localStorage.getItem("LISTAJOGOS"));
    return true;
  }

  getJogo(indice) {
    return this.listaJogos[indice];
  }

  getImagem(indice) {
    if (this.listaJogos[indice].IMAGEM_PRINCIPAL.toUpperCase() == this.listaJogos[indice].IMAGEM_PRINCIPAL) {
      let caminho;
      if (indice > 14 && indice < 19) {
        caminho = "../../../assets/images/" + this.listaJogos[indice].IMAGEM_NOME + ".jpg"; 
        return caminho;
      } else {
        caminho = "../../../assets/images/" + this.listaJogos[indice].IMAGEM_PRINCIPAL + ".jpg"; 
        return caminho;
      }
    } else {
      if (indice > 14 && indice < 19) {
        return this.listaJogos[indice].IMAGEM_NOME;
      } else {
        return this.listaJogos[indice].IMAGEM_PRINCIPAL;
      }
    }
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

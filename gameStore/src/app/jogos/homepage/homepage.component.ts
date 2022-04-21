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
  ) { 
    
  }
  
  ngOnInit() {
    localStorage.setItem('CAMINHO', '');
  }

  returnListaJogosLength() {
    this.listaJogos = JSON.parse(localStorage.getItem("LISTAJOGOS"))
    return 28;
  }
  getJogo(indice) {
    return this.listaJogos[indice];
  }

  redirecionamento(jogoCodigo) {
    this.router.navigate(['/jogos/' + jogoCodigo])
  }
}

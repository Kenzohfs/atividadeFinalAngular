import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { JogoService } from 'src/app/services/jogo.service';

@Component({
  selector: 'app-lista-jogos',
  templateUrl: './lista-jogos.component.html',
  styleUrls: ['./lista-jogos.component.css']
})
export class ListaJogosComponent implements OnInit {
  listaJogos
  constructor(
    private usuarioService: UsuarioService, private jogoService: JogoService
  ) { 
    this.jogoService.returnListaJogos();
   }

  ngOnInit() {
  }

  redirecionamento(caminho) {
    this.usuarioService.redirecionamento(caminho);
  }
}

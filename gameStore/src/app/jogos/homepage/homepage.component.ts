import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/jogo.service';

import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  listaJogos = [];

  constructor(
    private usuarioService: UsuarioService, private jogoService: JogoService
  ) { 
    jogoService.returnListaJogos().then((dados: any) =>{
      dados.json().then(lista => {

        //lógica para gerar 28 (qtd de jogos na home) números aleatórios
        //para adicionar jogos na listaJogos 
        let indice;
        for (let i = 0; i < 28; i++) {
          indice = Math.floor(Math.random() * (lista.length));
          this.listaJogos.push(lista[indice]);

          lista.splice(indice, 1);
        }
        console.log(this.listaJogos)
      })
    });
  }
  
  ngOnInit() {
    localStorage.setItem('CAMINHO', '');
  }
}

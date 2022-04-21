import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { JogoService } from './jogo.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private router: Router, private jogoService: JogoService) { }

  getListaGeneros() {
    fetch('/api/listar-generos', { method: 'POST' }).then((dados: any) => {
      dados.json().then((e: any) => {
        localStorage.setItem("GENEROS", JSON.stringify(e));
      })
    })
  }

  getListaJogos() {
    this.jogoService.returnListaJogos().then((dados: any) => {
      dados.json().then(lista => {

        //lógica para pegar 28 (qtd de jogos na home) jogos aleatórios sem repetição
        let listaJogos = [];
        let indice;
        for (let i = 0; i < 28; i++) {
          indice = Math.floor(Math.random() * (lista.length));
          listaJogos.push(lista[indice]);

          lista.splice(indice, 1);
        }
        localStorage.setItem("LISTAJOGOS", JSON.stringify(listaJogos));
      })
    });
  }

  verificarAdmin(id) {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/verificacao_admin', {
        method: 'POST',
        body: JSON.stringify(
          {
            id: id
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  adicionarJogo(nome: String, preco: number, imagem: String, imagem_principal: String, faixaEtaria: number, sinopse: String) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/adicionar-jogo', {
        method: "POST",
        body: JSON.stringify(
          {
            nome: nome,
            preco: preco,
            imagem_nome: imagem,
            imagem_principal: imagem_principal,
            faixa_etaria: faixaEtaria,
            descricao: sinopse
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado)
    })
  }
}

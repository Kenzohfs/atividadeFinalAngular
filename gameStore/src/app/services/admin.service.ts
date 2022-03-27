import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private router: Router) { }

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

  adicionarJogo(nome: String, preco: number, imagem: String, faixaEtaria: number, sinopse: String) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/adicionar-jogo', {
        method: "POST",
        body: JSON.stringify(
          {
            nome: nome,
            preco: preco,
            imagem_nome: imagem,
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

  procurarJogo(nome: String, preco: number, faixaEtaria: number, sinopse: String) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/adicionar-jogo', {
        method: "POST",
        body: JSON.stringify(
          {
            nome: nome,
            preco: preco,
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
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  constructor() { }

  returnListaJogos() {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/listar-jogos', {
        method: 'POST'
      })
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  returnListaJogosPalChav(string) {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/listar-jogo-palavra-chave', {
        method: 'POST',
        body: JSON.stringify({
          string: string
        }),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  returnListaJogosOrdAsc() {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/listar-jogo-nome-asc', {
        method: 'POST'
      })
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  returnListaJogosOrdDesc() {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/listar-jogo-nome-desc', {
        method: 'POST'
      })
        .then(resolvido)
        .catch(rejeitado);
    })
  }
}

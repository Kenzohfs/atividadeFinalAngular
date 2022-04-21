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

  returnGenerosCodigos(codigoJogo) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/return-generos-codigos', {
        method: 'POST',
        body: JSON.stringify(
          {
            codigo: codigoJogo
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resolvido)
        .catch(rejeitado);
    })
  }

  returnObjetoGenero(codigo) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/procurar-genero', {
        method: 'POST',
        body: JSON.stringify(
          {
            codigo: codigo
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resolvido)
        .catch(rejeitado);
    })
  }

  procurarJogo(id: number) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/procurar-jogo-id', {
        method: 'POST',
        body: JSON.stringify({
          codigo: id
        }),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  // returnListaJogosPalChav(listaJogos, string) {
  //   return new Promise((resolvido, rejeitado) => {

  //     fetch('/api/listar-jogo-palavra-chave', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         string: string
  //       }),
  //       headers: { 'Content-Type': 'application/json' }
  //     })
  //       .then(resolvido)
  //       .catch(rejeitado);
  //   })
  // }

  // returnListaJogosOrdAsc() {
  //   return new Promise((resolvido, rejeitado) => {

  //     fetch('/api/listar-jogo-nome-asc', {
  //       method: 'POST'
  //     })
  //       .then(resolvido)
  //       .catch(rejeitado);
  //   })
  // }

  // returnListaJogosOrdDesc() {
  //   return new Promise((resolvido, rejeitado) => {

  //     fetch('/api/listar-jogo-nome-desc', {
  //       method: 'POST'
  //     })
  //       .then(resolvido)
  //       .catch(rejeitado);
  //   })
  // }

  returnListaJogosGeneros(codigo) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/listar-lista-jogo-genero', {
        method: 'POST',
        body: JSON.stringify(
          {
            codigogenero: codigo
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(resolvido)
        .catch(rejeitado);
    })
  }
}

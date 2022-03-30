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
        .then(resultado =>  {
          resultado.json().then(e => {
            console.log('deu boa povo: ', e);
          })
        })
        .then(resolvido)
        .catch(rejeitado);
    })
  }
}

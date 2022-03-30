import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  constructor() { }

  returnListaJogos() {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/jogos', {
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
}

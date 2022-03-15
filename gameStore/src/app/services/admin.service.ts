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
}

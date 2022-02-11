import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  buscarUsuarios() {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/buscar_usuario', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        }
      })
      .then(resultado => resultado.json())
      .then(resolvido)
      .catch(rejeitado);
    })
  }

  criarUsuario(nome, email, telefone, senha) {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/criar_usuario', {
        method: 'POST',
        body: JSON.stringify(
          {
            nome: nome, email: email, telefone: telefone, senha: senha
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

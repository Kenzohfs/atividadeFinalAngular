import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private router: Router
  ) { }

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

  logar(id, senha) {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(
          {
            id: id, senha: senha
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

  redirecionamento(caminho: string) {
    localStorage.setItem('CAMINHO', window.location.pathname);
    console.log(caminho);
    this.router.navigate([caminho]);
    console.log("redirecionamento service: ", localStorage.getItem('CAMINHO'));
  }

  dadosSignup(nome, email) {
    // fetch('/api/verificacao_signup', {
    //   method: 'POST',
    //   body: JSON.stringify(
    //     {
    //       nome: nome, email: email
    //     }
    //   ),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // });


    return new Promise((resolvido, rejeitado) => {

      fetch('/api/verificacao_signup', {
        method: 'POST',
        body: JSON.stringify(
          {
            nome: nome, email: email
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

  
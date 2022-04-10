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

  dadosSignup(nome, email) {
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

  fecharPedido(user_id, valor) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/inserir_pedido', {
        method: 'POST',
        body: JSON.stringify(
          {
            valor: valor,
            user_id: user_id
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resolvido)
        .catch(rejeitado);
    })
  }

  listar_pedidos() {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/listar_pedidos', {
        method: 'POST'
      })
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  listar_jogo_pedido() {
    return new Promise((resolvido, rejeitado) => {
      
      fetch('/api/listar_jogo_pedido', {
        method: 'POST'
      })
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  inserirJogoPedido(pedido_codigo, jogo_codigo) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/inserir_jogo_pedido', {
        method: 'POST',
        body: JSON.stringify(
          {
            pedido_codigo: pedido_codigo,
            jogo_codigo: jogo_codigo
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resolvido)
        .catch(rejeitado);
    })
  }
}

  
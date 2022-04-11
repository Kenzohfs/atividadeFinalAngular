import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private router: Router) { }

  getListaGeneros() {
    fetch('/api/listar-generos', { method: 'POST' }).then((dados: any) => {
      dados.json().then((e: any) => {
        localStorage.setItem("GENEROS", JSON.stringify(e));
      })
    })
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

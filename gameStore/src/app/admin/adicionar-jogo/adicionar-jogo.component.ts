import { Component, OnInit } from '@angular/core';

import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adicionar-jogo',
  templateUrl: './adicionar-jogo.component.html',
  styleUrls: ['./adicionar-jogo.component.css']
})
export class AdicionarJogoComponent implements OnInit {

  dropdownList = JSON.parse(localStorage.getItem('GENEROS'));
  selectedItems = [];
  dropdownSettings = {};

  constructor(private admin: AdminService) {
  }

  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'CODIGO',
      textField: 'GENERO',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    window.scrollTo(0, 0);
  }

  nome;
  preco: number;
  imagem;
  imagem_principal;
  faixaEtaria: number;
  sinopse;

  adicionarJogo() {
    if (this.nome == null || this.preco == null || this.imagem == null || this.imagem_principal == null || this.faixaEtaria == null || this.sinopse == null || this.selectedItems.length == 0) {
      alert("Insira todos os dados!")
    } else if (typeof this.nome != "string" || typeof this.preco != "number" || typeof this.imagem != "string" || typeof this.imagem_principal != "string" || typeof this.faixaEtaria != "number" || typeof this.sinopse != "string" || this.imagem.indexOf("https://") == -1 || this.imagem_principal.indexOf("https://") == -1) {
      alert("Dados inseridos incorretamente!")
    } else {
      this.admin.adicionarJogo(this.nome, this.preco, this.imagem, this.imagem_principal, this.faixaEtaria, this.sinopse).then((dados: any) => {
      }).then((resultado: any) => {
        fetch("/api/procurar-jogo", {
          method: "POST",
          body: JSON.stringify({
            nome: this.nome,
            preco: this.preco,
            faixa_etaria: this.faixaEtaria,
            descricao: this.sinopse
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(resultado => {
          resultado.json().then(dados => {
            this.selectedItems.forEach((e) => {
              fetch("/api/inserir-jogo-genero", {
                method: 'POST',
                body: JSON.stringify({
                  jogo_codigo: dados.user.CODIGO,
                  genero_codigo: e.CODIGO
                }),
                headers: {
                  "Content-Type": "application/json"
                }
              })
            })
            alert("Jogo inserido com sucesso!");
            this.nome = null;
            this.preco = null;
            this.imagem = null;
            this.imagem_principal = null;
            this.faixaEtaria = null;
            this.sinopse = null;
            this.selectedItems = null;
          })
        })
      })
    }
  }

  onItemSelect(item: any) {
  }
  onSelectAll(items: any) {
  }
}

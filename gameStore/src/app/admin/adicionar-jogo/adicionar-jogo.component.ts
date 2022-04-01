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
    console.log("dropdownlist: ", this.dropdownList);
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'CODIGO',
      textField: 'GENERO',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  nome;
  preco;
  imagem;
  faixaEtaria;
  sinopse;

  adicionarJogo() {
    this.admin.adicionarJogo(this.nome, this.preco, this.imagem, this.faixaEtaria, this.sinopse).then((dados: any) => {
      console.log("dados: ", dados)
    }).then((resultado: any) => {
      console.log("resultado: ", resultado)
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
        console.log("fetch 1 : ", resultado)
        resultado.json().then(dados => {
          console.log("dados: ", dados)
          this.selectedItems.forEach((e) => {
            fetch("/api/inserir-jogo-genero", {
              method: 'POST',
              body: JSON.stringify({
                jogo_codigo: dados.user.CODIGO,
                genero_codigo: e.item_id
              }),
              headers: {
                "Content-Type": "application/json"
              }
            })
          })
        })
      })
    });
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}

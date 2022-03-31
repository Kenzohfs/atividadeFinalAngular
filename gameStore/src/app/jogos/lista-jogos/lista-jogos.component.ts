import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from 'src/app/services/usuario.service';
import { JogoService } from 'src/app/services/jogo.service';

@Component({
  selector: 'app-lista-jogos',
  templateUrl: './lista-jogos.component.html',
  styleUrls: ['./lista-jogos.component.css']
})
export class ListaJogosComponent implements OnInit {
  listaJogos;
  palavraChave;
  dropdownList = JSON.parse(localStorage.getItem('GENEROS'));
  selectedItems = [];
  dropdownSettings = {};

  constructor(
    private usuarioService: UsuarioService, private jogoService: JogoService, private router: Router
  ) {
    this.jogoService.returnListaJogos().then((dados: any) => {
      dados.json().then(e => {
        this.listaJogos = e;
        console.log('e', e);
        console.log(this.listaJogos);
      })
    });
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
  }

  pesquisarJogo() {
    this.jogoService.returnListaJogosPalChav(this.palavraChave).then((dados: any) => {
      dados.json().then(e => {
        this.listaJogos = e;
      })
    })
  }

  ordernarLista(tipo) {
    if (tipo == 'ASC') {
      this.jogoService.returnListaJogosOrdAsc().then((dados: any) => {
        dados.json().then(e => {
          this.listaJogos = e;
        })
      })
    } else {
      this.jogoService.returnListaJogosOrdDesc().then((dados: any) => {
        dados.json().then(e => {
          this.listaJogos = e;
        })
      })
    }
  }

  // filtro por genero:
  // *Pegar lista de generos escolhida
  // *Procurar códigos de jogos que contém código do gênero (dar fetch para
  // pegar resultado de todos as tuplas que contém o código do gênero)
  // *Verificar se esse jogo tem todos os gêneros da lista (fazer verificação se
  // tem algum jogo que tem todos os códigos de generos da lista)
  // *Usar lista final para mostrar na tela

  onItemSelect(item: any) {
    console.log(item);
    console.log('lista: ', this.selectedItems)
    this.jogoService.returnListaJogosGeneros(this.selectedItems).then((dados: any) => {
      dados.json().then(e => {
        console.log('eeeeee: ', e);
      })
    })
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  redirecionamento(caminho) {
    this.usuarioService.redirecionamento(caminho);
  }

  getPath(imagemNome) {
    return '../../../assets/images/' + imagemNome + '.jpg';
  }

  getPreco(preco) {
    return preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  redirecionarJogo(codigo) {
    this.router.navigate(['jogos/' + codigo]);
  }
}

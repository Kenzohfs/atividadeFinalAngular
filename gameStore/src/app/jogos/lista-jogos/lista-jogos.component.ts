import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from 'src/app/services/usuario.service';
import { JogoService } from 'src/app/services/jogo.service';
import * as myGlobals from '../../myGlobals';


@Component({
  selector: 'app-lista-jogos',
  templateUrl: './lista-jogos.component.html',
  styleUrls: ['./lista-jogos.component.css']
})
export class ListaJogosComponent implements OnInit {
  dropdownList;
  listaJogos
  palavraChave;
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
    console.log('listajogos: ',this.listaJogos)
   }

  ngOnInit() {
    console.log("dropdownlist: ", this.dropdownList);
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  getLista() {
    this.dropdownList = myGlobals.listaGeneros;
  }

  pesquisarJogo() {
    console.log(this.palavraChave);
    this.jogoService.returnListaJogosPalChav(this.palavraChave).then((dados: any) => {
      dados.json().then(e => {
        this.listaJogos = e;
        console.log('e chave: ', e);
      })
    })
  }

  ordernarLista(tipo) {
    if (tipo == 'ASC') {
      this.jogoService.returnListaJogosOrdAsc().then((dados: any) => {
        dados.json().then(e => {
          this.listaJogos = e;
          console.log('e ord: ', e)
        })
      })
    } else {
      this.jogoService.returnListaJogosOrdDesc().then((dados: any) => {
        dados.json().then(e => {
          this.listaJogos = e;
          console.log('e ord: ', e)
        })
      })
    }
  }

  onItemSelect(item: any) {
    console.log(item);
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
    return preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  redirecionarJogo(codigo) {
    this.router.navigate(['jogos/' + codigo]);
  }
}

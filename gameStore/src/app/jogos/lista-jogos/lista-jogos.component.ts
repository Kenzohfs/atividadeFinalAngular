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
  listaJogos = [];
  listaJogosFiltrada = []
  palavraChave: String;
  dropdownList = JSON.parse(localStorage.getItem('GENEROS'));
  selectedItems = [];
  dropdownSettings = {};

  constructor(
    private usuarioService: UsuarioService, private jogoService: JogoService, private router: Router
  ) {
    this.jogoService.returnListaJogos().then((dados: any) => {
      dados.json().then(e => {
        this.listaJogos = e;
        this.listaJogosFiltrada = e;
        console.log('e', e);
        console.log("lista jogos: ", this.listaJogos);
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
    this.pesquisarJogo();
  }

  pesquisarJogo() {
    let palavra = this.palavraChave;

    const listaFiltrada = this.listaJogos.filter(function (element) {
      return element.NOME.toLowerCase().indexOf(palavra.toLowerCase()) > -1;
    });

    this.listaJogosFiltrada = listaFiltrada;
  }

  ordernarLista(tipo) {
    if (tipo == 'ASC') {
      this.listaJogosFiltrada = this.listaJogosFiltrada.sort(function (a, b) {
        return (a.NOME > b.NOME) ? 1 : ((b.NOME > a.NOME) ? -1 : 0);
      })

      // this.jogoService.returnListaJogosOrdAsc().then((dados: any) => {
      //   dados.json().then(e => {
      //     this.listaJogos = e;
      //   })
      // })
    } else {
      // this.jogoService.returnListaJogosOrdDesc().then((dados: any) => {
      //   dados.json().then(e => {
      //     this.listaJogos = e;
      //   })
      // })
      this.listaJogosFiltrada = this.listaJogosFiltrada.sort(function (a, b) {
        return (a.NOME < b.NOME) ? 1 : ((b.NOME < a.NOME) ? -1 : 0);
      })
    }
  }

  filtrarGenero() {
    if (this.selectedItems.length == 0) {
      this.jogoService.returnListaJogos().then((dados: any) => {
        dados.json().then(e => {
          this.listaJogos = e;
        })
      });
    } else {
      console.log('lista: ', this.selectedItems)
      let listaFiltradaGenero = [];
      fetch('api/listar-jogo-genero', {
        method: 'POST'
      }).then(resultado => {
        resultado.json().then(dado => {
          console.log('dado: ', dado);
          console.log('generos: ', this.selectedItems);
          this.selectedItems.forEach(e => {
            dado.forEach(item => {
              if (e.CODIGO == item.GENERO_CODIGO) {
                listaFiltradaGenero.push(item.JOGO_CODIGO);
              }
            })
          })
          console.log("listaFiltradaGenero: ", listaFiltradaGenero);
          let countJogo, listaFiltrada = [], verificacao;
          for (let i = 0; i < listaFiltradaGenero.length; i++) {
            countJogo = 0;
            for (let a = 0; a < listaFiltradaGenero.length; a++) {
              if (listaFiltradaGenero[i] == listaFiltradaGenero[a]) {
                countJogo++;
              }
            }

            console.log('jogo de código: ', listaFiltradaGenero[i], " repetiu ", countJogo, " vezes")
            console.log('length select: ', this.selectedItems.length);

            if (countJogo == this.selectedItems.length) {
              verificacao = true;
              for (let c = 0; c < listaFiltrada.length; c++) {
                if (listaFiltrada[c] == listaFiltradaGenero[i]) {
                  verificacao = false;
                }
              }
              if (verificacao) {
                listaFiltrada.push(listaFiltradaGenero[i]);
              }
            }
          }
          console.log("listafiltrada: ", listaFiltrada);
          let listaJogosFiltradaByGen = [];
          listaFiltrada.forEach(e => {
            fetch('/api/procurar-jogo-id', {
              method: 'POST',
              body: JSON.stringify(
                {
                  codigo: e
                }
              ),
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(vai => {
              vai.json().then(a => {
                console.log('a ', a);
                listaJogosFiltradaByGen.push(a);
              })
            })
          })
          console.log('oi: ', listaJogosFiltradaByGen);
          this.listaJogos = listaJogosFiltradaByGen;
        })
      })
    }
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
    this.selectedItems = items;
    this.filtrarGenero();
  }

  onDeSelectAll(items: any) {
    this.jogoService.returnListaJogos().then((dados: any) => {
      dados.json().then(e => {
        this.listaJogos = e;
      })
    });
  }

  getPath(imagemNome) {
    if (imagemNome.toUpperCase() == imagemNome) {
      return '../../../assets/images/' + imagemNome + '.jpg';
    } else {
      return imagemNome;
    }
  }

  getPreco(preco) {
    return preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  redirecionarJogo(codigo) {
    this.router.navigate(['jogos/' + codigo]);
  }
}

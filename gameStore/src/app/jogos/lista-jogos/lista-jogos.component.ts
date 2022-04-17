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
  palavraChave: String = "";
  dropdownList = JSON.parse(localStorage.getItem('GENEROS'));
  selectedItems = [];
  dropdownSettings = {};
  orderBy: String = "ASC";

  constructor(
    private usuarioService: UsuarioService, private jogoService: JogoService, private router: Router
  ) {
    this.jogoService.returnListaJogos().then((dados: any) => {
      dados.json().then(e => {
        this.listaJogos = e;
        this.listaJogosFiltrada = e;
        console.log('e', e);
        console.log("lista jogos: ", this.listaJogos);
        this.ordernarLista(this.orderBy);
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
    //não sei pq tem isso aq
    // this.pesquisarJogo();
  }

  pesquisarJogo(onItemDeSelect: boolean) {
    let palavra = this.palavraChave;
    console.log("palavra: ", palavra)
    if (this.selectedItems.length == 0) {

      const listaFiltrada = this.listaJogos.filter(function (element) {
        return element.NOME.toLowerCase().indexOf(palavra.toLowerCase()) > -1;
      });
      this.listaJogosFiltrada = listaFiltrada;
    } else {
      if (palavra == "") {
        //lógica para saber se a função ta sendo chamada pela função onItemDeSelect()
        //se estiver, não deve filtrar o gênero denovo, pq se filtrar vai bugar
        if (!onItemDeSelect) {
          this.filtrarGenero();
        }
      } else {
        const listaFiltrada = this.listaJogosFiltrada.filter(function (element) {
          return element.NOME.toLowerCase().indexOf(palavra.toLowerCase()) > -1;
        });
        this.listaJogosFiltrada = listaFiltrada;
      }
    }

    this.ordernarLista(this.orderBy);
  }

  ordernarLista(tipo) {
    if (tipo == 'ASC') {
      this.listaJogosFiltrada = this.listaJogosFiltrada.sort(function (a, b) {
        return (a.NOME > b.NOME) ? 1 : ((b.NOME > a.NOME) ? -1 : 0);
      })
    } else {
      this.listaJogosFiltrada = this.listaJogosFiltrada.sort(function (a, b) {
        return (a.NOME < b.NOME) ? 1 : ((b.NOME < a.NOME) ? -1 : 0);
      })
    }
    
    this.orderBy = tipo;
  }

  filtrarGenero() {
    if (this.selectedItems.length == 0) {
      if (this.palavraChave == "") {
        this.listaJogosFiltrada = this.listaJogos;
      } else {
        this.pesquisarJogo(false);
      }

    } else {

      if (this.palavraChave == "") {
        this.listaJogosFiltrada = this.listaJogos;
      }
      console.log('lista: ', this.selectedItems)
      let listaFiltradaGenero = [];

      //fetch para pegar lista de jogos generos (codigo do jogo e codigo do genero, a tabela n-n);
      fetch('api/listar-jogo-genero', {
        method: 'POST'
      }).then(resultado => {
        resultado.json().then(dado => {
          console.log('dado: ', dado);
          console.log('generos: ', this.selectedItems);

          //verificar o código do genero selecionado é igual a um código_genero da lista de jogos generos
          //adicionar os codigos dos jogos numa lista
          this.selectedItems.forEach(e => {
            dado.forEach(item => {
              if (e.CODIGO == item.GENERO_CODIGO) {
                listaFiltradaGenero.push(item.JOGO_CODIGO);
              }
            })
          })

          //lista de jogos que corresponderam a algum genero selecionado
          //IMPORTANTE: se escolher mais de um gênero e um jogo tiver mais de uma congruência com essa lista
          //de gêneros, o jogo vai ser adicionado mais de uma vez
          console.log("listaFiltradaGenero: ", listaFiltradaGenero);

          //lógica para descobrir quantas vezes cada jogo repetiu na listafiltradagenero
          let countJogo, listaFiltrada = [], verificacao;
          for (let i = 0; i < listaFiltradaGenero.length; i++) {
            countJogo = 0;

            //faz verificação se o codigo do jogo ta se repetindo dentro da listafiltradagenero
            for (let a = 0; a < listaFiltradaGenero.length; a++) {
              if (listaFiltradaGenero[i] == listaFiltradaGenero[a]) {
                countJogo++;
              }
            }

            console.log('jogo de código: ', listaFiltradaGenero[i], " repetiu ", countJogo, " vezes")
            console.log('length select: ', this.selectedItems.length);

            //se o jogo repetiu a mesma quantidade de vezes que a quantidade de gêneros selecionada
            //quer dizer q o jogo possui todos os gêneros selecionados pelo usuários
            //e deve aparecer na tela dpois do filtro
            if (countJogo == this.selectedItems.length) {
              verificacao = true;

              //verificação se o jogo que estou verificando acima já foi adicionado na lista
              for (let c = 0; c < listaFiltrada.length; c++) {
                if (listaFiltrada[c] == listaFiltradaGenero[i]) {
                  verificacao = false;
                }
              }

              //se o jogo já foi adicionado, não vai ser adicionado denovo
              //se não foi adicionado, será adicionado nessa, e somente nessa vez
              if (verificacao) {
                listaFiltrada.push(listaFiltradaGenero[i]);
              }
            }
          }

          //lista dos códigos dos jogos que foram filtrados
          console.log("listafiltrada: ", listaFiltrada);

          //lógica para excluir os itens da listafiltrada caso não estejam aparecendo na tela
          let contagem = 0;
          listaFiltrada.forEach(jogoTemp => {

            let congruência: boolean = false;
            this.listaJogosFiltrada.forEach(jogoTelaTemp => {

              if (jogoTemp == jogoTelaTemp.CODIGO) {
                congruência = true;
              }
            })

            if (congruência == false) {
              listaFiltrada.splice(contagem, 1);
            }

            contagem++;
          })

          //logica para adicionar na listajogosfiltradabygen os objetos jogos através de seus códigos
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
                this.ordernarLista(this.orderBy);
              })
            })
          })

          //lista de objetos jogos que corresponderam aos generos seleciondados
          console.log('oi: ', listaJogosFiltradaByGen);
          this.listaJogosFiltrada = listaJogosFiltradaByGen;

        })
      })
    }
  }

  filtrarGeneroDeSelect() {
    let palavraTemp: String = "";
    if (this.palavraChave != "") {
      palavraTemp = this.palavraChave;
      this.palavraChave = "";
    }

    this.listaJogosFiltrada = this.listaJogos;
    this.filtrarGenero();

    this.palavraChave = palavraTemp;
    this.pesquisarJogo(true);
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

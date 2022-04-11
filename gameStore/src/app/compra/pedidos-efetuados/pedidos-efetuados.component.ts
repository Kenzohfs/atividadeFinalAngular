import { Component, OnInit } from '@angular/core';

import { UsuarioService } from 'src/app/services/usuario.service';
import { JogoService } from 'src/app/services/jogo.service';

@Component({
  selector: 'app-pedidos-efetuados',
  templateUrl: './pedidos-efetuados.component.html',
  styleUrls: ['./pedidos-efetuados.component.css']
})
export class PedidosEfetuadosComponent implements OnInit {

  aparecer: boolean;
  listaPedidos = [];
  listaJogoPedidoTemp = [];
  listaJogoPedido = [];
  listaJogos = [];

  //fetch para descobrir os jogos em cada pedido
  //adicionar uma lista com os jogos de cada pedido em outra lista
  //dessa lista fazer aparecer na tela as informações solicitadas

  constructor(private usuarioService: UsuarioService, private jogoService: JogoService
  ) {
    this.usuarioService.listar_pedidos().then((e: any) => {
      e.json().then(dados => {
        console.log("dados : ", dados)
        dados.forEach(element => {
          if (element.USER_ID == localStorage.getItem("USER_ID")) {
            this.listaPedidos.push(element);
          }
        })

        //lista de pedidos do usuário feita
        console.log('lista pedidos: ', this.listaPedidos)

        //decidir qual div vai aparecer
        if (this.listaPedidos.length > 0) {
          this.aparecer = true;
        } else {
          this.aparecer = false;
        }

        //fetch para pegar a lista com os jogos de cada pedido
        this.usuarioService.listar_jogo_pedido().then((resultado: any) => {
          resultado.json().then(jogosPedidos => {
            console.log('jogos pedidos: ', jogosPedidos)

            this.listaPedidos.forEach(a => {

              jogosPedidos.forEach(b => {

                if (a.CODIGO == b.PEDIDO_EFETUADO_CODIGO) {
                  this.listaJogoPedidoTemp.push(b);
                }

              })

              this.listaJogoPedido.push(this.listaJogoPedidoTemp);
              this.listaJogoPedidoTemp = [];

            })

            console.log('listajogopedido: ', this.listaJogoPedido);

            //lógica para pegar o nome e preco de cada jogo
            //criar lista com os jogos da lsitaJogoPedido
            //usar ela para mostar no frontend

            this.jogoService.returnListaJogos().then((e: any) => {
              e.json().then(dados => {
                console.log("dados: ", dados);

                let listaTemp;

                this.listaJogoPedido.forEach(jogos => {

                  listaTemp = [];
                  jogos.forEach(jogo => {

                    dados.forEach(jogoBase => {

                      if (jogoBase.CODIGO == jogo.JOGO_CODIGO) {
                        listaTemp.push(jogoBase);
                      }

                    })
                  })

                  this.listaJogos.push(listaTemp);

                })
                console.log('lista jogos: ', this.listaJogos);
              })
            })


          })
        })

      })
    })


  }

  ngOnInit() {
    console.log("oninit: ", this.listaJogos);
  }

  returnMoedaBrasileria(valor) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  listaJogosCarrinho = JSON.parse(localStorage.getItem("CARRINHO")) || [];
  aparecer;
  subtotal: number = 0;

  constructor(private usuarioService: UsuarioService, private router: Router
  ) {
    this.aparecer = true;
    if (this.listaJogosCarrinho.length == 0) {
      this.aparecer = false;
    }
    console.log("a", this.listaJogosCarrinho)
    this.listaJogosCarrinho.forEach(e => {
      this.subtotal += e.PRECO
    })
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  fecharPedido() {
    this.usuarioService.fecharPedido(parseInt(localStorage.getItem("USER_ID")), this.subtotal).then((e: any) => {

      this.usuarioService.listar_pedidos().then((e: any) => {

        e.json().then(dados => {

          console.log("dados listar pedidos: ", dados);
          this.listaJogosCarrinho.forEach(e => {

            this.usuarioService.inserirJogoPedido((dados.length), e.CODIGO);
            localStorage.removeItem("CARRINHO");
            this.aparecer = false;
            this.listaJogosCarrinho = JSON.parse(localStorage.getItem("CARRINHO")) || [];

          })
          this.pedidoEfetuadoSucesso();
        })
      })
    });
  }

  pedidoEfetuadoSucesso() {
    alert("Pedido efetuado com sucesso!");
  }

  removerItem(indice) {
    this.listaJogosCarrinho.splice(indice, 1);
    let lista = JSON.parse(localStorage.getItem("CARRINHO"));
    lista.splice(indice, 1);
    if (lista.length > 0) {
      localStorage.setItem("CARRINHO", JSON.stringify(lista));
    } else {
      this.aparecer = !this.aparecer;
      localStorage.removeItem("CARRINHO");
    }
    console.log('listacarrinhos: ', this.listaJogosCarrinho);
    this.constructor();
  }

  returnPreco(preco) {
    return preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }
}
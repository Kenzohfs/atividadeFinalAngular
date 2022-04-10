import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  listaJogosCarrinho = JSON.parse(localStorage.getItem("CARRINHO")) || [];
  aparecer;

  constructor(
  ) { 
    this.aparecer = true;
    if (this.listaJogosCarrinho.length == 0) {
      this.aparecer = false;
    }
    console.log("a", this.listaJogosCarrinho)
  }

  ngOnInit() {
  }

  fecharPedido() {
    
  }
}

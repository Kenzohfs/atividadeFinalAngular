import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { JogoService } from 'src/app/services/jogo.service';

@Component({
  selector: 'app-info-jogo',
  templateUrl: './info-jogo.component.html',
  styleUrls: ['./info-jogo.component.css']
})
export class InfoJogoComponent implements OnInit {
  urlParam;
  listaGeneros = [];
  imagemPrincipal;
  nome;
  preco;
  faixaEtaria;
  descricao;
  jogo;
  buttonText: String;
  aparecer;
  listaCarrinho = [];

  constructor(private jogoService: JogoService, private route: ActivatedRoute, private router: Router) {
    this.urlParam = route.snapshot.paramMap.get('codigo');
    this.jogoService.procurarJogo(this.urlParam).then((resultado: any) => {
      resultado.json().then(dado => {
        this.jogo = dado;
        if (dado.IMAGEM_PRINCIPAL.toUpperCase() == dado.IMAGEM_PRINCIPAL) {
          this.imagemPrincipal = '../../../assets/images/' + dado.IMAGEM_PRINCIPAL + '.jpg';
        } else {
          this.imagemPrincipal = dado.IMAGEM_PRINCIPAL;
        }
        this.nome = dado.NOME;
        this.preco = dado.PRECO.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        this.faixaEtaria = dado.FAIXA_ETARIA;
        this.descricao = dado.DESCRICAO;
        this.aparecer = true;
        this.listaCarrinho.forEach(e => {
          if (e.CODIGO == dado.CODIGO) {
            this.aparecer = false;
          }
        })
      })
    })

    this.listaCarrinho = (JSON.parse(localStorage.getItem("CARRINHO"))) || [];

    this.jogoService.returnGenerosCodigos(this.urlParam).then((resultado: any) => {
      resultado.json().then(dados => {
        console.log("dados adfasdf: ", dados)
        dados.forEach(e => {
          console.log('egenerocodigo: ', e);
          this.jogoService.returnObjetoGenero(e.GENERO_CODIGO).then((resultado: any) => {
            resultado.json().then(dado => {
              console.log("dado asdsaçflkj: ", dado)
              this.listaGeneros.push(dado);
            })
          })
        })
        console.log('listaGeneros: ', this.listaGeneros)
      })
    })

  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  adicionarCarrinho() {
    if (localStorage.getItem("USUARIO") == 'true') {
      this.listaCarrinho.push(this.jogo)
      localStorage.setItem("CARRINHO", JSON.stringify(this.listaCarrinho));
      this.aparecer = !this.aparecer;
    } else {
      let path = window.location.pathname;
      localStorage.setItem("PASTCAMINHO", path);
      this.router.navigate(['/login'])
    }
  }

  getPath(imagemNome) {
    if (imagemNome.toUpperCase() == imagemNome) {
      return '../../../assets/images/' + imagemNome + '.jpg';
    } else {
      return imagemNome;
    }
  }
}

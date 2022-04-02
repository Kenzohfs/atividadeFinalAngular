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

  constructor(private jogoService: JogoService, private route: ActivatedRoute) {
    this.urlParam = route.snapshot.paramMap.get('codigo');
    console.log('urlparam: ', this.urlParam);
    this.jogoService.procurarJogo(this.urlParam).then((resultado: any) => {
      resultado.json().then(dado => {
        console.log("dado: ", dado);
        this.imagemPrincipal = '../../../assets/images/' + dado.IMAGEM_PRINCIPAL + '.jpg';
        console.log(this.imagemPrincipal)
        this.nome = dado.NOME;
        this.preco = dado.PRECO.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });;
        this.faixaEtaria = dado.FAIXA_ETARIA;
        this.descricao = dado.DESCRICAO;
      })
    })

    this.jogoService.returnGenerosCodigos(this.urlParam).then((resultado: any) => {
      resultado.json().then(dados => {
        console.log("dados; ", dados);
        dados.forEach(e => {
          this.jogoService.returnObjetoGenero(e.GENERO_CODIGO).then((resultado: any) => {
            resultado.json().then(dado => {
              this.listaGeneros.push(dado);
            })
          })
        })
        console.log('listaGeneros: ', this.listaGeneros)
      })
    })

  }

  ngOnInit() {
  }
}

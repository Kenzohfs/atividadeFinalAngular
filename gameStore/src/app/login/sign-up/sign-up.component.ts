import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  nome: string;
  email: string;
  telefone: number;
  senha: string;
  confirmarSenha: string;

  constructor() { }

  ngOnInit() {
  }

  teste(evento) {
    console.log(evento);
  }

}

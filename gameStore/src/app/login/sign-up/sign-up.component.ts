import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

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

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

  cadastrarUsuario() {
    if (this.verificarCampos()) {
      console.log("cadastrarUsuario() passou");

      this.usuarioService.criarUsuario(this.nome, this.email, this.telefone, this.senha)
      .then(resultado => {
        console.log("RESULTADO: ", resultado)
      }).catch(erro => {
        console.log("ERRO AO BUSCAR USUARIOS: ", erro)
      });
    }
  }

  verificarCampos() {
    let campoNulo = false;

    if (!this.nome) {
      alert("É necessário preencher o nome!");
      campoNulo = true;
    }

    if (!this.email) {
      alert("É necessário preencher o email!");
      campoNulo = true;
    }

    if (!this.telefone) {
      alert("É necessário preencher o telefone!");
      campoNulo = true;
    }

    if (!this.senha) {
      alert("É necessário preencher o senha!");
      campoNulo = true;
    }

    if (!this.confirmarSenha) {
      alert("É necessário preencher a confimarção de senha!");
      campoNulo = true;
    }

    if (this.senha != this.confirmarSenha) {
      alert("É necessário que as duas senhas coincidam!");
      campoNulo = true;
    }

    if (campoNulo) {
      return false;
    } else {
      return true;
    }
  }
}

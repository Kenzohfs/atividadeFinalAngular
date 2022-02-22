import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  cadastrarUsuario() {
    if (this.verificarCampos()) {

      let boolean: boolean = true;
      this.usuarioService.dadosSignup(this.nome, this.email).then((dados: any) => {
        console.log(dados);
        if (dados.length > 0) {
          alert("Email ou Usuário já cadastrado!");
          boolean = false;
        }
      }).then(result => {
        if (boolean) {
          this.usuarioService.criarUsuario(this.nome, this.email, this.telefone, this.senha)
            .then(resultado => {
              console.log("RESULTADO: ", resultado)
              this.nome = this.email = this.telefone = this.senha = this.confirmarSenha = undefined;
              this.router.navigate(['login']);
            }).catch(erro => {
              console.log("ERRO AO BUSCAR USUARIOS: ", erro)
            });
        }
      })
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

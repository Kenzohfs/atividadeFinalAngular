import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  id: string;
  senha: string;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logar() {
    this.usuarioService.logar(this.id, this.senha).then((dados: any) => {
        if (dados.user) {
          console.log(dados);
          this.router.navigate([localStorage.getItem('CAMINHO')]);
        } else {
          alert('Usuário e senha incorretos!');
        }
      }).catch(erro => {
        console.log(erro);
      });
  }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
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
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logar() {
    if (this.id && this.senha) {
      this.usuarioService.logar(this.id, this.senha).then((dados: any) => {
        if (dados.user) {
          console.log(dados);
          localStorage.setItem('USUARIO', "true");

          this.adminService.verificarAdmin(this.id).then((dados: any) => {
            if (dados.length > 0) {
              console.log("logar admin: ", dados);
              localStorage.setItem('ADMIN', "TRUE");
            } else {
              localStorage.setItem('ADMIN', "FALSE");
            }
            this.router.navigate([localStorage.getItem('PASTCAMINHO')]);
          });
        } else {
          alert('Usuário e senha incorretos!');
        }
      }).catch(erro => {
        console.log(erro);
      });
    }
  }

}
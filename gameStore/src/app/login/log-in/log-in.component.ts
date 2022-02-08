import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
    this.usuarioService.buscarUsuarios().then(resultado => {
      console.log("RESULTADO: ", resultado)
    }).catch(erro => {
      console.log("ERRO AO BUSCAR USUARIOS: ", erro)
    })
  }

}

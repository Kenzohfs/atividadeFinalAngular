import { Component, OnInit } from '@angular/core';

import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
    localStorage.setItem('CAMINHO', '');
  }

  redirecionamento(caminho) {
    console.log("caminho home: ", caminho);
    this.usuarioService.redirecionamento(caminho);
  }

  adcBtn() {
    if(localStorage.getItem('ADMIN') == 'TRUE') {
      return true;
    } else {
      return false;
    }
  }
}

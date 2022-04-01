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
}

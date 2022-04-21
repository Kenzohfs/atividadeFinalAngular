import { Component } from '@angular/core';

import { AdminService } from './services/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gameStore';

  constructor(private adminService: AdminService) {
    this.adminService.getListaGeneros();
    this.adminService.getListaJogos();
  }

  mostrar() {
    let path = window.location.pathname;
    if (path != '/login' && path != '/signup') {
      return true;
    } else {
      return false;
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gameStore';

  constructor() {
    fetch('/api/listar-generos', {method: 'POST'}).then((dados: any) => {
      dados.json().then((e: any) => {
        localStorage.setItem("GENEROS", JSON.stringify(e));
      })
    })
  }
}

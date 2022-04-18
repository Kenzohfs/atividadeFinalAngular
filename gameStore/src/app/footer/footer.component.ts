import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mostrarFooter() {
    let path = window.location.pathname;
    if (path != '/login' && path != '/signup' ) {
      return true;
    } else {
      return false;
    }
  }

}

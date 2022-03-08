import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
class CheckLogged implements CanActivate {
    constructor(
        private router: Router,
    ) { }

    path;

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log("checkLogged");

        this.path = window.location.pathname;
        console.log("path", this.path);

        if (localStorage.getItem('USUARIO') == 'true') {
            if (this.path == "/adicionar-jogo" || localStorage.getItem('CAMINHO') == "/adicionar-jogo") {
                console.log("Entrou");
            }
            return true;
        } else {
            localStorage.setItem('CAMINHO', window.location.pathname);
            this.router.navigate(['login']);
            return false;
        }
    }
}

export default CheckLogged;
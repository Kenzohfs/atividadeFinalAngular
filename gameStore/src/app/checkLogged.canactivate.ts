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

        if (localStorage.getItem('USUARIO') == 'true') {
            if ((localStorage.getItem('CAMINHO') == "adicionar-jogo")
                && localStorage.getItem("ADMIN") == 'TRUE') {
                return true;
            } else {
                this.router.navigate([localStorage.getItem("PASTCAMINHO")]);
                console.log('retornou')
                return false;
            }
        } else {
            localStorage.setItem('PASTCAMINHO', window.location.pathname);
            this.router.navigate(['login']);
            return false;
        }
    }
}

export default CheckLogged;
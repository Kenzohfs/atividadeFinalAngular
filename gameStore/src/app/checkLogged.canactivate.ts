import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
class CheckLogged implements CanActivate {
    constructor(
        private router: Router
    ) { }

    path;

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log("checkLogged");
        console.log(localStorage)
        if (localStorage.getItem('ADMIN') == 'TRUE') {
            return true;
        }
        if (localStorage.getItem('USUARIO') == 'true') {
            console.log("aq, ", window.location.pathname)
            if (window.location.pathname == '/adicionar-jogo') {
                this.router.navigate(['/']);
                return false;
            } else {
                return true;
            }
        }
        localStorage.setItem('PASTCAMINHO', window.location.pathname);
        console.log("else pastcaminho: ", window.location.pathname)
        this.router.navigate(['login']);
        return false;

        if (localStorage.getItem('USUARIO') == 'true') {
            if ((localStorage.getItem('CAMINHO') == "adicionar-jogo")
                && localStorage.getItem("ADMIN") == 'TRUE') {
                return true;
            } else if (localStorage.getItem('CAMINHO') == "adicionar-jogo" && localStorage.getItem("ADMIN") == 'FALSE') {
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
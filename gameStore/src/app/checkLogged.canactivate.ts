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
        if (localStorage.getItem('ADMIN') == 'TRUE') {
            return true;
        }
        if (localStorage.getItem('USUARIO') == 'true') {
            if (window.location.pathname == '/adicionar-jogo') {
                this.router.navigate(['/']);
                return false;
            } else {
                return true;
            }
        }
        localStorage.setItem('PASTCAMINHO', window.location.pathname);
        this.router.navigate(['login']);
        return false;
    }
}

export default CheckLogged;
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
class CheckLogged implements CanActivate {
    constructor(
        private router: Router,
      ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log("checkLogged");

        if (localStorage.getItem('USUARIO') == 'true') {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}  

export default CheckLogged;
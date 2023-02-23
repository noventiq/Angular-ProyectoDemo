import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertaGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const sesionIniciada =  this.userIsLogged();
      const rolAdministrador = this.userHasRoleAdmin();

      if(sesionIniciada && rolAdministrador) {
        return true;
      }

      return false;
  }

  userIsLogged() {
    return true;
  }

  userHasRoleAdmin() {
    return true;
  }
  
}

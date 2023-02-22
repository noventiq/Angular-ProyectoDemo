import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertaSinGuardarGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.userIsLogged()) return true;

    if (component?.formSearch) {
      const control = component?.formSearch.get('usuario');
      if (control.dirty) {
        return confirm('Tiene datos sin guardar');
      }
    }
  }

  userIsLogged() {
    return true;
  }
}

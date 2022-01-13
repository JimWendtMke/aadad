import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { CocoaDocsService } from './docs.service';

@Injectable({
  providedIn: 'root'
})
export class CocoaDocsRouteGuardService implements CanActivate {

  constructor(
    private router: Router,
    private cocoaDocsService: CocoaDocsService
  ) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {

    /**
    * Hard coded route (ie: home, variables)
    */
    if (!route.params && !route.params.target) {
      return of(true);
    }

    /**
    * Get the URL parameters for testing
    */
    let target: string;
    let type: string;
    if (route.params && route.params.target) {
      target = route.params.target;
    }
    if (route.routeConfig.path.search(/:target/)) {
      type = route.routeConfig.path.split('/')[0];
    }

    if (this.cocoaDocsService.canNavigate(type, target)) {
      return of(true);
    }
    this.router.navigate(['error404']);
    return of(false);
  }

}

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { CoreService } from './../services/core.service';

@Injectable({
  providedIn: 'root'
})
export class ConfirmGuard implements CanActivate {

  constructor(
    private router: Router,
    private coreService: CoreService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.coreService.entry$.pipe(
      take(1),
      map(entry => !!entry),
      tap(hasEntry => {
        if (!hasEntry) {
          this.router.navigate(['entry']);
        }
      })
    );
  }

}

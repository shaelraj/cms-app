import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs-compat';
import { AfService } from './../providers/af.service';
import { take, map, tap } from 'rxjs/operators';


@Injectable()
export class SubscriberGuard implements CanActivate {

  constructor(private af: AfService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.af.user$.pipe(
      take(1),
      map(user => user && user.roles.subscriber ? true : false),
      tap(isSubscriber => {
        if (!isSubscriber) {
          console.log('Access denied - only Subscriber allowed!!!');
        }
      })
    );
  }
}

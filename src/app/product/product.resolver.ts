import { Injectable, NgZone } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';


@Injectable()
export class ProductResolver implements Resolve<any> {
  constructor(
    private appSv: AppService
  ) { }

  asyncCheck() {
    return new Promise((resolve,reject) => {
      /* assumed call API for 500ms */
      setTimeout(() => {
        resolve(true)
      }, 500)
    });
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    this.appSv.loading$.next(true);
    return this.asyncCheck().then(res => {
      return res;
    })
  }
}

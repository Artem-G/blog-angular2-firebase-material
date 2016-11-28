import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AngularFire} from 'angularfire2';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(public af: AngularFire,
              public router: Router) {
  }

  canActivate() {
    return this.af.auth.map((auth) => {
      if (!auth) {
        this.router.navigateByUrl('login');
        return false;
      }
      return true;
    }).take(1);

  }
}
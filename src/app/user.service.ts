import {Injectable} from '@angular/core';
import {AngularFire} from 'angularfire2';
import {Router} from '@angular/router';

@Injectable()
export class UserService {
  authState  = null; // User

  constructor(public af: AngularFire,
              public router: Router) {
    this.af.auth.subscribe(state => {
      if (state) {
        // user logged in
        this.authState  = state;
        console.log('Logged In: ', state);
      }
      else {
        // user not logged in
        this.authState  = null;
      }
    });
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
    this.authState = null;
    this.router.navigateByUrl('/');
  }

  isLoggedIn() {
    return this.authState !== null;
  }

  getUsername() {
    return this.authState.auth.displayName;
  }
}

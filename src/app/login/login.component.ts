import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AngularFire} from 'angularfire2';
import {UserService} from '../user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public af: AngularFire,
              private user: UserService,
              private router: Router) { }

  ngOnInit() { }
}

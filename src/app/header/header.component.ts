import {Component} from '@angular/core';
import {AngularFire} from 'angularfire2';
import {UserService} from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public af: AngularFire,
              public user: UserService){ }

}

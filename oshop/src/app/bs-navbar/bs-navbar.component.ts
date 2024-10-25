import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {
  constructor(public authsv: AuthService) {

  }

  logout() {
    this.authsv.logout()
  }
}
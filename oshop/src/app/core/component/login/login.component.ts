import { Component } from '@angular/core';
import { AuthService } from 'share/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authsv: AuthService) { }

  login() {
    this.authsv.login();
    console.log(this.authsv)
  }
}

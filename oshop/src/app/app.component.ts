import { UserService } from 'share/services/user.service';
import { Component } from '@angular/core';
import { AuthService } from 'share/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private userService: UserService, 
    private authsv: AuthService, 
    router: Router) 
  {
    this.authsv.user$.subscribe(user => {
      if (!user) return
        userService.save(user);
        let returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) return
        localStorage.removeItem('returnUrl');
        router.navigateByUrl(returnUrl as string);
    });
  }
}

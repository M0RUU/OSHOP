import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from 'share/services/auth.service';
import { map } from 'rxjs/operators';
import { UserService } from 'share/services/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private authsv: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.authsv.appUser$.pipe(
      map(appUser => {
        console.log('User Data:', appUser);
        return appUser?.isAdmin ?? false;
      })
    )
  }
}

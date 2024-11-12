import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authsv: AuthService, private router: Router) { }

  canActivate(route: any, state: RouterStateSnapshot) {
    return this.authsv.user$.pipe(
      map(user => {
        if (user) return true;

        this.router.navigate(['/login']), { queryParams: { returnUrl: state.url } }
        return false;
      })
    );
  }
}

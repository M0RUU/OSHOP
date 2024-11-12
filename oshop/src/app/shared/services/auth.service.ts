import { Injectable } from '@angular/core';
import { GoogleAuthProvider, signInWithPopup, Auth, signOut, onAuthStateChanged, User } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, of } from 'rxjs';
import { UserService } from './user.service';
import { AppUser } from 'share/models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User | null>;

  constructor(
    private auth: Auth,
    private route: ActivatedRoute,
    private userService: UserService) {
    this.user$ = new Observable<User | null>((observer) => {
      onAuthStateChanged(this.auth, (user) => {

        observer.next(user);
      });
    });
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl)
    signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    signOut(this.auth)
  }

  get appUser$(): Observable<AppUser | null> {
    return this.user$.pipe(
      switchMap(user => user ? this.userService.get(user.uid) : of(null))
    );
  }

}

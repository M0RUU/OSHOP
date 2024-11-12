import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { User } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AppUser } from 'share/models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private db: AngularFireDatabase) {}

  save(user: User) {
    this.db.object('/users/' + user.uid)
      .set({
        name: user.displayName,
        email: user.email,
        isAdmin: false
     })
  }

  get(uid: string): Observable<AppUser | null> {
    return this.db.object<AppUser>(`/users/${uid}`).valueChanges();
  }
} 
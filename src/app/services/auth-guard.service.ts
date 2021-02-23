import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { User } from '../models/thought';
import { LocalDbService } from './local-db.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public router: Router, private localDbService: LocalDbService) {}
  canActivate(): boolean {
    let email = document.cookie.split('="')[1];
    email = email.substring(0, email.length - 1);
    const dbUser = this.localDbService.get<User>('users', 'email', email);
    if (!dbUser) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
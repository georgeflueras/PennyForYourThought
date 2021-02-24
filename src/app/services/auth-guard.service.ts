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
    const sessionUser = sessionStorage.getItem('user');
    let cookieUser = document.cookie?.split('="')[1]?.split(';')[0];
    const userEmail = sessionUser || cookieUser;
    const dbUser = this.localDbService.get<User>('users', 'email', userEmail);
    if (!dbUser) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
} 
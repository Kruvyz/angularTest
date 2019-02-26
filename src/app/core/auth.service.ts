import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user = new BehaviorSubject<string>('');

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (this.user.value === 'admin') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  AuthAsUser() {
    this.user.next('user');
  }

  AuthAsAdmin() {
    this.user.next('admin');
  }
}

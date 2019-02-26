import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  userAuth() {
    this.authService.AuthAsUser();
    this.router.navigate(['/home']);
  }

  adminAuth() {
    this.authService.AuthAsAdmin();
    this.router.navigate(['/admin']);
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';
import { LoginService } from './login.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login!: Login;
  feedback: any = {};
  warning: boolean = false;
  @ViewChild('appComponent') appComponent!: AppComponent;

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {
  }

  ngOnInit() {
    this.login = new Login();
    this.feedback = {};
  }

  loginFn() {
    this.loginService.login(this.login.username, this.login.password).subscribe((id) => {
      if (id !== 0) {
        localStorage.setItem('loginId', id.toString());
        this.router.navigate(['watched']);
      } else {
        this.warning = true;
        this.router.navigate(['login']);
      }
    });
  }

  cancel() {
    this.warning = false;
    this.router.navigate(['/login']);
  }
}

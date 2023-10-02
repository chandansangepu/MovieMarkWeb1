import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'home-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginId: any = '0';

  constructor(public loginService: LoginService) {
  }

  ngOnInit() {
    this.loginId = localStorage.getItem('loginId');
  }

  getLoginFlag() {
    this.loginId = localStorage.getItem('loginId');
  }

}


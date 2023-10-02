import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, of as observableOf } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    const url = environment.baseUrlDev + `User/Login/${username}/${password}`;
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<number>(url, { headers });
  }

}


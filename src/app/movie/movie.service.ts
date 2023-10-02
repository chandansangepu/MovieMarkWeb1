import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Movie } from './movie';
import { environment } from 'src/environments/environment';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) {
  }

  get(userId: number): Observable<Movie[]> {
    const params = { 'userId': userId };
    const url = environment.baseUrlDev + `Movie/Get/${userId}`;
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Movie[]>(url, { params, headers });
  }

  watch(id: number) {
    const params = { 'id': id };
    const url = environment.baseUrlDev + `Movie/WatchMovie/${id}`;
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get(url, { params, headers });
  }

  save(movie: Movie) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    const url = environment.baseUrlDev + `Movie/PostMovie`;
    return this.http.post(url, movie, { headers });
  }

  delete(id: number) {
    const params = { 'id': id };
    const url = environment.baseUrlDev + `Movie/DeleteMovie/${id}`;
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete(url, { headers, params });
  }

}


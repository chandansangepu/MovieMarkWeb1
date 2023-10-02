import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { FormControl, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-awaiting',
  templateUrl: './awaiting.component.html',
  styleUrls: ['./awaiting.component.css'],
})

export class AwaitingComponent implements OnInit {
  warning!: false;
  watched!: false;
  feedback: any = {};
  movie!: Movie;
  movieSubmit = 'Save';
  movies: Movie[] = [];
  noOfRows = 1;
  noOfCols = 4;
  rows: number[] = [];
  cols: any[] = [];
  today: Date = new Date();
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  isLogin: boolean = false;
  loginId: number = 0;

  constructor(
    private movieService: MovieService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.movie = new Movie();
    this.feedback = {};
    this.loginId = Number(localStorage.getItem('loginId'));
    if (this.loginId !== 0) { this.isLogin = true; }
    this.movieService.get(this.loginId).subscribe((s) => {
      if (s) {
        this.movies = s.filter((f) => !f.isWatched);
      }
    })
  }

  watch(id: number) {
    this.movieService.watch(id).subscribe((s) => {
      this.ngOnInit();
    })
  }

  logout() {
    localStorage.removeItem('loginId');
    this.router.navigate(['login']);
  }

}

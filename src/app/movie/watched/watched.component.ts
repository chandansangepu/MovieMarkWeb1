import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-watched',
  templateUrl: './watched.component.html',
  styleUrls: ['./watched.component.css'],
})

export class WatchedComponent implements OnInit {
  warning!: false;
  watched!: false;
  feedback: any = {};
  movie!: Movie;
  movieSubmit = 'Save';
  movies: Movie[] = [];
  rows: number[] = [];
  cols: any[] = [];
  today: Date = new Date();
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  isLogin: boolean = false;
  loginId: number = 0;

  constructor(
    private router: Router,
    private movieService: MovieService,
  ) {
  }

  ngOnInit() {
    this.movie = new Movie();
    this.feedback = {};
    this.loginId = Number(localStorage.getItem('loginId'));
    if (this.loginId !== 0) { this.isLogin = true; }
    this.movieService.get(this.loginId).subscribe((s) => {
      if (s) {
        this.movies = s.filter((f) => f.isWatched);
      }
    })
  }

  cancel() {
    this.router.navigate(['/home']);
  }

  logout() {
    localStorage.removeItem('loginId');
    this.router.navigate(['login']);
  }

}

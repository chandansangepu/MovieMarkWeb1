import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})

export class MoviesComponent implements OnInit {
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
  new = false;

  constructor(
    private movieService: MovieService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.new = false;
    this.movie = new Movie();
    this.feedback = {};
    this.loginId = Number(localStorage.getItem('loginId'));
    if (this.loginId !== 0) { this.isLogin = true; }
    this.movieService.get(this.loginId).subscribe((s) => {
      if (s) {
        this.movies = s;
      }
    })
  }

  onFileChange(event: any) {
    let file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.movie.image = reader.result as string;
    };
  }

  add() {
    this.new = true;
  }

  save() {
    this.movie.isDeleted = false;
    this.movie.watchedOn = new Date();
    this.movie.isWatched = false;
    this.movie.access = this.loginId;
    this.movieService.save(this.movie).subscribe((s) => {
      this.ngOnInit();
    })
  }

  delete(id: number) {
    this.movieService.delete(id).subscribe((s) => {
      this.ngOnInit();
    })
  }

  cancel() {
    this.new = false;
  }

  logout() {
    localStorage.removeItem('loginId');
    this.router.navigate(['login']);
  }


}

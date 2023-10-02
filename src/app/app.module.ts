import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_EXTRA_OPTIONS, APP_ROUTES } from './app.routes';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { MovieService } from './movie/movie.service';
import { WatchedComponent } from './movie/watched/watched.component';
import { AwaitingComponent } from './movie/awaiting/awaiting.component';
import { MoviesComponent } from './movie/movies/movies.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([...APP_ROUTES], { ...APP_EXTRA_OPTIONS }),
    FormsModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    WatchedComponent,
    AwaitingComponent,
    MoviesComponent,
  ],
  providers: [LoginService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

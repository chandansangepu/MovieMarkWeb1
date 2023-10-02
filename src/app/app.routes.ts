import { ExtraOptions, PreloadAllModules, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WatchedComponent } from './movie/watched/watched.component';
import { AwaitingComponent } from './movie/awaiting/awaiting.component';
import { MoviesComponent } from './movie/movies/movies.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'watched',
    component: WatchedComponent
  },
  {
    path: 'awaiting',
    component: AwaitingComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
]

export const APP_EXTRA_OPTIONS: ExtraOptions = {
  preloadingStrategy: PreloadAllModules
}

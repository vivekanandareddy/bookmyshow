import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/movies',
    pathMatch:'full'
  },
  {
    path:'movies',
    component: MoviesComponent
  },
  {
    path: 'mymovies',
    component: MyMoviesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { RegisterService } from './register.service';
import { LoginService } from './login.service';
import { MoviesService} from './movies.service';
import { AuthGuard } from './auth.guard';
import  { TokenInterceptorService } from './token-interceptor.service'; 
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MoviesComponent,
    MyMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RegisterService,LoginService,MoviesService,AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

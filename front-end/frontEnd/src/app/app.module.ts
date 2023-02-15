import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './home-body/footer/footer.component';
import { AboutComponent } from './about/about.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path :'', component: LandingPageComponent},
  {path :'HomeBody', component: HomeBodyComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Sign-up', component: SignUpComponent},
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'loginpage', component: LoginComponent},
  {path: 'search-result', component: SearchResultComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeBodyComponent,
    SearchResultComponent,
    FooterComponent,
    AboutComponent,

    SignUpComponent,
    LandingPageComponent,

    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

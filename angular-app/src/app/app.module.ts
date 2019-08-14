// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Layouts
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { SignInOutFormLayoutComponent } from './layouts/sign-in-out-form-layout/sign-in-out-form-layout.component';

// Pages
import { HomeComponent } from './pages/home/home.component';

// Components
import { AppComponent } from './app.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

// Services

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainLayoutComponent,
    MainNavbarComponent,
    MainFooterComponent,
    SignInComponent,
    SignUpComponent,
    SignInOutFormLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

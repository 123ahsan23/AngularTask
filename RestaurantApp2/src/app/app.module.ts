import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Added this for animations

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialComponent } from './material/material.component';
import { RestaurantDashBoardComponent } from './restaurant-dash-board/restaurant-dash-board.component';
import { SignupComponent } from './signup/signup.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material Modules
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card'; // Added MatCardModule
import { MatButtonModule } from '@angular/material/button'; // Added MatButtonModule
import { MatIconModule } from '@angular/material/icon'; // Corrected to MatIconModule

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup'
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MaterialComponent,
    RestaurantDashBoardComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut: 8000, // Default timeout for toasts
      positionClass: 'toast-top-right', // Default position
      preventDuplicates: true, // Prevent duplicate toasts
    }), 
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    NgToastModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()) 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

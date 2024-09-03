import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MaterialComponent } from './material/material.component';
import { RestaurantDashBoardComponent } from './restaurant-dash-board/restaurant-dash-board.component';
import { AuthGuard } from './share/auth.guard';

const routes: Routes = [
  {path: '' , redirectTo: 'login' , pathMatch : 'full'},
{path: '**' ,redirectTo: 'login' , pathMatch:'full'},
  {path: 'login' , component:LoginComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'material' , component:MaterialComponent},
  {path: 'restaurant' , component:RestaurantDashBoardComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

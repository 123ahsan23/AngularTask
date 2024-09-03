import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../share/auth.service';

@Component({
  selector: 'app-restaurant-dash-board',
  templateUrl: './restaurant-dash-board.component.html',
  styleUrls: ['./restaurant-dash-board.component.css']
})
export class RestaurantDashBoardComponent {

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../share/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formValue!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.authService.logout();
    this.formValue = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Added email validator
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.formValue.invalid) {
      this.toastr.warning('Please enter valid credentials', 'Form Error', {
        timeOut: 8000
      });
      return;
    }

    this.http.get<any>("http://localhost:3000/signup").subscribe({
      next: (res) => {
        const user = res.find((a: any) => {
          return a.email === this.formValue.value.email && a.password === this.formValue.value.password;
        });

        if (user) {
          this.toastr.success('User Login Successful', 'Success Message', {
            timeOut: 9000
          });
          this.formValue.reset();
          this.router.navigate(['restaurant']);


          localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
          localStorage.setItem('usertype', 'employ');
        } else {

          this.toastr.warning('User not found with these credentials', 'Error Message', {
            timeOut: 8000
          });
        }
      },
      error: (err) => {
        console.error("Error details:", err);
        this.toastr.error('Something went wrong. Please try again later.', 'Error', {
          timeOut: 8000
        });
      }
    });
  }
}

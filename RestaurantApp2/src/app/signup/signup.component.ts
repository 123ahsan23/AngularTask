import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  myform!:FormGroup;
  constructor(private fb:FormBuilder , private http: HttpClient, private router:Router){

  }
    
  ngOnInit(): void {
    this.myform = this.fb.group({
      name:['' , Validators.required],
      email:['',Validators.required],
      mobile: ['' , Validators.required],
      password: ['' , Validators.required]

    })
  }

  signup() {
    this.http.post<any>("http://localhost:3000/signup", this.myform.value).subscribe({
      next: (res) => {
        alert("You are registered successfully");
        this.myform.reset();
        this.router.navigate(['login']);
      },
      error: (err) => {
        console.error("Error details:", err);
        alert("Something went wrong");
      }
    });
  }

}

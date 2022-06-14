import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private userServices: UsersService, private router: Router) { }

  ngOnInit(): void {
  }
  submitForm(formAdd: NgForm) {
    this.userServices.signin(formAdd.value).subscribe((data) => {
      localStorage.setItem("user", JSON.stringify(data))
      window.location.href = "http://localhost:4200/admin"
    })
  }
}

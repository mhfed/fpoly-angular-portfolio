import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private UserService: UsersService, private router: Router) {}

  ngOnInit(): void {}
  submitForm(formAdd: NgForm) {
    console.log(formAdd.value);
    this.UserService.signup(formAdd.value).subscribe(() => {
      this.router.navigateByUrl("/login")
    });
  }
}

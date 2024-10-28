import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor (private userService: UserService, private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit () {
    this.userService.login(this.formLogin.value)
      .then((response: any) => {
        this.router.navigate([ '/home' ]);
      })
      .catch((error: any) => console.log(error));
  }

  onClick () {
    this.userService.loginWithGoogle()
      .then((response: any) => {
        this.router.navigate([ '/home' ]);
      })
      .catch((error: any) => console.log(error));
  }

  checkControl (controlName: string, errorName: string): boolean {
    return !!(this.formLogin.get(controlName)?.hasError(errorName) &&
      this.formLogin.get(controlName)?.touched);
  }
}

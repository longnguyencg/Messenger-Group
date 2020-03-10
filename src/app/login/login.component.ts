import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AuthService} from '../service/auth.service';
import {LoginService} from '../service/login.service';
import {UsersService} from '../service/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private userService: UsersService,
              private router: Router,
              private lg: LoginService) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [],
      password: [],
    });
  }

  login(data) {
    const user = {
      email: data.email,
      password: data.password,
    };
    this.lg.login(user).subscribe(next => {
      if (next.status === true) { this.router.navigate(['chat-box']); } });
  }

}

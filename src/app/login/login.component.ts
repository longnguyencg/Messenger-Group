import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {UsersService} from '../service/users.service';
import {Router} from '@angular/router';
import {IUsers} from '../interface/iusers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private userService: UsersService,
              private router: Router,
  ) {
  }
  loginForm;

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
    this.userService.login(user).subscribe(next => {
      if (next.status === true) {
        this.router.navigate(['chat-box/' + next.id]);
      }
    });
  }

}

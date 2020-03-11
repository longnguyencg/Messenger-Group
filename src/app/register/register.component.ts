import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UsersService} from '../service/users.service';
import {IUsers} from '../interface/iusers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;

  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UsersService) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      status: [false],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  login(data: IUsers) {
    this.userService.add(data).subscribe(next => {
    });
    alert('Bạn đã tạo thành công tài khoản');
    this.router.navigate(['/login']);
  }

  getName() {
    return this.registerForm.get('name');
  }

  getEmail() {
    return this.registerForm.get('email');
  }

  getPassword() {
    return this.registerForm.get('password');
  }

}

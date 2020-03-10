import {Component, OnInit} from '@angular/core';
import {IUsers} from '../interface/iusers';
import {LoginComponent} from '../login/login.component';
import {Router} from '@angular/router';
import {UsersService} from '../service/users.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  users;

  constructor(protected router: Router, protected usersService: UsersService) {
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.usersService.getAll().subscribe(next => {
      this.users = next;
    });
  }

  // logout(id) {
  //   console.log(id);
  //   this.usersService.logout(id).subscribe(next => {
  //     this.router.navigate(['login']);
  //     console.log(next);
  //   });
  // }

}

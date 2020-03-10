import {Component, OnInit} from '@angular/core';
import {IUsers} from '../interface/iusers';
import {LoginComponent} from '../login/login.component';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../service/users.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  id;
  user: IUsers;
  users: IUsers[];

  constructor(protected router: Router, protected usersService: UsersService, protected route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getAllUsers();
    this.getUser();
  }

  getAllUsers() {
    this.usersService.getAll().subscribe(next => {
      this.users = next['data'];
    });
  }

  logout() {
    this.usersService.logout(this.id).subscribe(next => {
      this.router.navigate(['login']);
    });
  }

  getUser() {
    this.usersService.findById(this.id).subscribe(next => {
      this.user = next;
    });
  }

}

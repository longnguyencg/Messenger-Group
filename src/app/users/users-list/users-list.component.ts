import {Component, OnInit} from '@angular/core';
import {IUsers} from '../../interface/iusers';
import {UsersService} from '../../service/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  userFilter: IUsers[] = [];
  users: IUsers[] = [];
  userService: any;

  constructor(userService: UsersService) {
    this.userService = userService;
  }

  ngOnInit(): void {
    this.userFilter = this.userService.getAll();
    this.users = this.userFilter;
  }

}

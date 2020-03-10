import {Component, Input, OnInit} from '@angular/core';
import {IUsers} from '../../interface/iusers';
import {UsersService} from '../../service/users.service';
import {ActivatedRoute, ActivationEnd} from '@angular/router';

@Component({
  selector: 'app-message-group',
  templateUrl: './message-group.component.html',
  styleUrls: ['./message-group.component.css']
})
export class MessageGroupComponent implements OnInit {
  id;
  users: IUsers[];

  constructor(protected usersService: UsersService, protected route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

  }
}

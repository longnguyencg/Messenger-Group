import { Component, OnInit } from '@angular/core';
import {IUsers} from '../../interface/iusers';
import {UsersService} from '../../service/users.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-message-new-group',
  templateUrl: './message-new-group.component.html',
  styleUrls: ['./message-new-group.component.css']
})
export class MessageNewGroupComponent implements OnInit {
  id;
  users: IUsers[];
  constructor(protected usersService: UsersService, protected route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}

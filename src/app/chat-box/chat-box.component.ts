import {Component, OnInit} from '@angular/core';
import {IUsers} from '../interface/iusers';
import {LoginComponent} from '../login/login.component';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../service/users.service';
import Chatkit from '@pusher/chatkit-client';
import axios from 'axios';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  id;
  user: IUsers;

  title = 'Monk-eyes Chatroom';
  messages = [];
  users = [];
  currentUser: any;

  _username: string = '';

  constructor(protected router: Router,
              protected usersService: UsersService,
              protected route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getUser();
  }

  getUser() {
    this.usersService.findById(this.id).subscribe(next => {
      this.username = next['data'].name;
      this.addUser();
    });
  }
  get username(): string {
    return this._username;
  }
  set username(value: string) {
    this._username = value;
  }

  _message: string = '';
  get message(): string {
    return this._message;
  }
  set message(value: string) {
    this._message = value;
  }

  sendMessage() {
    const { message, currentUser } = this;
    currentUser.sendMessage({
      text: message,
      roomId: '0f301749-fdaa-4f2f-9a71-1192dd14f554',
    });
    this.message = '';
  }

  addUser() {
    const { username } = this;
    axios.post('http://localhost:5200/users', { username })
      .then(() => {
        const tokenProvider = new Chatkit.TokenProvider({
          url: 'http://localhost:5200/authenticate'
        });

        const chatManager = new Chatkit.ChatManager({
          instanceLocator: 'v1:us1:567d7a41-b1af-4d12-91f7-d10655588954',
          userId: username,
          tokenProvider
        });

        return chatManager
          .connect()
          .then(currentUser => {
            currentUser.subscribeToRoom({
              roomId: '0f301749-fdaa-4f2f-9a71-1192dd14f554',
              messageLimit: 100,
              hooks: {
                onMessage: message => {
                  this.messages.push(message);
                },
                onPresenceChanged: (state, user) => {
                  this.users = currentUser.users.sort((a, b) => {
                    if (a.presence.state === 'online') return -1;

                    return 1;
                  });
                },
              },
            });

            this.currentUser = currentUser;
            this.users = currentUser.users;
          });
      })
      .catch(error => console.error(error))
  }

}

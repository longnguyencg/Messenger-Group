import { Injectable } from '@angular/core';
import {IUsers} from '../interface/iusers';
import {LoginComponent} from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class ChatBoxService {
user: IUsers;
  constructor(protected lg: LoginComponent) { }

}

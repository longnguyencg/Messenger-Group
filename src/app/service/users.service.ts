import {Injectable} from '@angular/core';
import {IUsers} from '../interface/iusers';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: IUsers[] = [{
    name: 'Hoang',
    email: 'hoang@gmail.com',
    // @ts-ignore
    status: false,
    password: '123456'
  },
    {
      name: 'Dieu',
      email: 'dieu@gmail.com',
      // @ts-ignore
      status: false,
      password: '123456'
    },
    {
      name: 'Long',
      email: 'long@gmail.com',
      // @ts-ignore
      status: false,
      password: '123456'
    },
    {
      name: 'An',
      email: 'an@gmail.com',
      // @ts-ignore
      status: false,
      password: '123456'
    }];

  constructor() {
  }

  // @ts-ignore
  getAll(): IUsers[] {
    return this.users;
  }
}

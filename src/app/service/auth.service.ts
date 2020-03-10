import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  checkLogin(user, data): boolean {
    for (const item of data) {
      // tslint:disable-next-line:triple-equals
      if (user.email == item.email && user.password == item.password) {
        return true;
      }
    }
    return false;
  }
}

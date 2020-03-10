import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUsers} from '../interface/iusers';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://127.0.0.1:8000/api/';

  constructor(protected http: HttpClient) {
  }

  login(data): Observable<IUsers> {
    return this.http.post<IUsers>(this.url + 'login', data);
  }
}

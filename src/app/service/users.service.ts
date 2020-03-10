import {Injectable} from '@angular/core';
import {IUsers} from '../interface/iusers';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://127.0.0.1:8000/api/';

  constructor(protected http: HttpClient) {
  }

  // @ts-ignore
  getAll(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(this.url + 'users');
  }

  login(data): Observable<IUsers> {
    return this.http.post<IUsers>(this.url + 'login', data);
  }

  logout(id) {
    return this.http.get(this.url + 'logout/' + id);
  }
  findById(id): Observable<IUsers> {
    return this.http.get<IUsers>(this.url + 'users/' + id);
  }
}

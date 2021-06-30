import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_helpers/interfaces/User.model';

const API_URL = 'http://localhost:5000';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(
      API_URL + '/users'
    );
  }

  getUser(): Observable<any> {
    return this.http.get(
      API_URL + '/users'
    );
  }

  createUser(user: User): Observable<any> {
    console.log(user);
    return this.http.post(
      API_URL + '/users',
      user,
      httpOptions
    );
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(
      API_URL + '/users' + `/${user.id}`,
      user,
      httpOptions
    );
  }

  deleteUser(user: User): Observable<any> {
    return this.http.delete(
      API_URL + '/users' + `/${user.id}`
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Promise<any> {
    return fetch('http://localhost:3000/users')
      .then((response) => response.json())
    // .then((json) => console.log(json));
  }

  createUser(user): Promise<any> {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify(
        user
      ),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }

    }).then((response) => response.json());
  }

  updateUser(user): Promise<any> {
    return fetch('http://localhost:3000/users/' + user.id, {
      method: 'PUT',
      body: JSON.stringify(
        user
      ),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }

    }).then((response) => response.json());
  }

  deleteUser(user): Promise<any> {
    return fetch('http://localhost:3000/users/' + user.id, {
      method: 'DELETE',
    }).then(response => response.json());
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Promise<any> {
    return fetch('http://localhost:5000/users')
      .then(response => response.json())
      .catch((error) => {
        console.error(error);
      });
  }

  createUser(user): Promise<any> {
    return fetch('http://localhost:5000/users', {
      method: 'POST',
      body: JSON.stringify(
        user
      ),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }

    }).then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  }

  updateUser(user): Promise<any> {
    return fetch('http://localhost:5000/users/' + user.id, {
      method: 'PUT',
      body: JSON.stringify(
        user
      ),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }

    }).then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  }

  deleteUser(user): Promise<any> {
    return fetch('http://localhost:5000/users/' + user.id, {
      method: 'DELETE',
    }).then(response => response.json())
      .catch((error) => {
        console.error(error);
      });
  }
}

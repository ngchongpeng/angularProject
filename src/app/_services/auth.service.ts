import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { nextTick } from 'process';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    // return this.http.post(AUTH_API + 'signin', {
    //   username: credentials.username,
    //   password: credentials.password
    // }, httpOptions);
    let obs$ = Observable.create(consumer => {
      let user = {
        username: credentials.username,
        roles:['ROLE_ADMIN','ROLE_MODERATOR'],
        accessToken: '1234567890'
      };

      consumer.next(user);
      consumer.complete();
    });
    
    return obs$;
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
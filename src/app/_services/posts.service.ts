import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(environment.apiHost + '/posts');
  }

  getSinglePost(pId: string): Observable<any> {
    return this.http.get(environment.apiHost + `/posts/${pId}`);
  }

  createPost(payload): Observable<any> {
    return this.http.post(environment.apiHost + '/posts', payload);
  }

  updatePost(payload): Observable<any> {
    return this.http.put(environment.apiHost + '/posts', payload);
  }
}

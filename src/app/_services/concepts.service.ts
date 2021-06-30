import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:5000';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ConceptsService {

  constructor(private http: HttpClient) { }

  getConcepts(): Observable<any> {
    // return this.http.get(
    //   API_URL + '/concepts'
    // );

    let obs$ = Observable.create(consumer => {
      let concepts = [
        'routing',
        'route guards',
        'lazy loaded modules',
        'string interpolation',
        'property binding',
        'event binding',
        'two way binding',
        'template variables',
        '@ViewChild()',
        'td form',
        'reactive form',
        'form validation',
        'services',
        'http calls',
        'http interceptors',
        'directives',
        'rxjs',
        'authentication & authorization',
        'pipes',
        'component lifecycles',
        'change detection',
      ]

      consumer.next(concepts);
      consumer.complete();
    });

    return obs$;
  }
}

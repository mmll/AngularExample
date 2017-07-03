import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Dish }           from './dish';
@Injectable()
export class DishSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Dish[]> {
    return this.http
               .get('app/dishes/?name='+term+'')
               .map(function(response){
				   return response.json().data as Dish[];
               });
  }
}
response => response.json().data as Dish[]
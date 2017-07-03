import { Injectable } from '@angular/core';
import { Dish } from './dish';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DishService{
	private dishesUrl = 'api/dishes';
	constructor(private http:Http){

	}
	getDishes(): Promise<Dish[]>{
		return this.http.get(this.dishesUrl)
		.toPromise()
		.then(response=>response.json().data as Dish[])
		.catch(this.handleError);
	}
	getDish(id: number): Promise<Dish> {
		return this.getDishes()
			.then(dishes => dishes.find(dish => dish.id === id))
	}
	private handleError(error: any): Promise <any>{
		console.error('An error occurred',error);
		return Promise.reject(error.messge||error);
	}
}
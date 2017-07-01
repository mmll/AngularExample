import { Injectable } from '@angular/core';
import { Dish } from './dish';
import { DISHES } from './mock-dishes';


@Injectable()
export class DishService{
	getDishes(): Promise<Dish[]>{
		return Promise.resolve(DISHES);
	}

	getDish(id: number): Promise<Dish> {
		return this.getDishes()
			.then(dishes => dishes.find(dish => dish.id === id))
	}
}
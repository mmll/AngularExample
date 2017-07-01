import { Injectable } from '@angular/core';
import { Dish } from './dish';
import { DISHES } from './mock-dishes';


@Injectable()
export class DishService{
	getHeroes(): Dish[]{
		return DISHES;
	}
}
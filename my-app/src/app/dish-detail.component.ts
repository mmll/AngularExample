import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from './dish.service'; 
import { Dish } from './dish';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'dish-detail',
  templateUrl: './dish-detail.component.html'
})
export class DishDetailComponent implements OnInit{
	@Input() dish: Dish;
	constructor(
		private dishService: DishService,
		private route: ActivatedRoute,
		private location: Location
		){}
	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) =>
				this.dishService.getDish(+params['id']))
			.subscribe(dish => this.dish = dish)
	}
	goBack(): void{
		this.location.back();
	}
  	
}

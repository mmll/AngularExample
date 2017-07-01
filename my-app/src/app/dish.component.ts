import { Component, OnInit } from '@angular/core';
import { Dish } from './dish';
import { DishDetailComponent } from './dish-detail.component';
import { DishService } from './dish.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'my-dishes',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css'],
})

export class DishesComponent implements OnInit{

  dishes: Dish[];
  selectedDish : Dish;


  constructor(
    private router: Router,
    private dishService:DishService
    ){}
  getDishes(): void{
	  this.dishService.getDishes().then(dishes=>this.dishes=dishes);
  }
  ngOnInit(): void{
	  this.getDishes();
  }
  onSelect(dish: Dish): void{
  	this.selectedDish = dish;
  }
  gotoDetail():void{
    this.router.navigate(['/detail',this.selectedDish.id]);
  }
}

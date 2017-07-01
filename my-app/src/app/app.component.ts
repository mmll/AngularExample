import { Component } from '@angular/core';
import { Dish } from './dish';
import { DishDetailComponent } from './dish-detail.component';
import { DishService } from './dish.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedDish : Dish;

  onSelect(dish: Dish): void{
  	this.selectedDish = dish;
  }
}

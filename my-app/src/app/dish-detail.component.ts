import { Component, Input } from '@angular/core';
import { Dish } from './dish';


@Component({
  selector: 'dish-detail',
  templateUrl: './dish-detail.component.html'
})
export class DishDetailComponent {
  @Input() dish: Dish;
}

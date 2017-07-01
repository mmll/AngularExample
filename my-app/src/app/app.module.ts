import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { DishesComponent } from './dish.component';
import { DishDetailComponent } from './dish-detail.component'

import { AppRoutingModule } from './app-routing.module';
import { DishService } from './dish.service';
@NgModule({
	declarations: [
		AppComponent,
		DishesComponent,
		DishDetailComponent,
		DashboardComponent,

	],
  imports: [
    BrowserModule,
	FormsModule,
	AppRoutingModule
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }

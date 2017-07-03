import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { DishesComponent } from './dish.component';
import { DishDetailComponent } from './dish-detail.component'
import { DishSearchComponent } from './dish-search.component'

import { AppRoutingModule } from './app-routing.module';
import { DishService } from './dish.service';
@NgModule({
	declarations: [
		AppComponent,
		DishesComponent,
		DishDetailComponent,
		DashboardComponent,
		DishSearchComponent

	],
  imports: [
    BrowserModule,
	FormsModule,
	AppRoutingModule,
	HttpModule,
	AlertModule.forRoot(),
	InMemoryWebApiModule.forRoot(InMemoryDataService)

  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }

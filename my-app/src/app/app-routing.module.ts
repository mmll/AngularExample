import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { RouterLink } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DishesComponent } from './dish.component';
import { DishDetailComponent } from './dish-detail.component';
import { MdTabsModule,MaterialModule} from '@angular/material';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'detail/:id', component: DishDetailComponent },
	{ path: 'dishes', component: DishesComponent }
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule, MaterialModule]
})
export class AppRoutingModule { 

}
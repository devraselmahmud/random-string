import { Routes } from '@angular/router';
import { RandomStringComponent } from './random-string/random-string.component';
import { ObjectTestingComponent } from './object-testing/object-testing.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'random-string', component: RandomStringComponent},
    {path: 'object-testing', component: ObjectTestingComponent},
    {path: 'home', component: HomeComponent}
];

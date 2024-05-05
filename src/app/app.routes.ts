import { Routes } from '@angular/router';
import { RandomStringComponent } from './random-string/random-string.component';
import { ObjectTestingComponent } from './object-testing/object-testing.component';

export const routes: Routes = [
    {path: 'random-string', component: RandomStringComponent},
    {path: 'object-testing', component: ObjectTestingComponent}
];

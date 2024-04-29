import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RandomStringComponent } from './random-string/random-string.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RandomStringComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'random-project';
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RandomStringComponent } from './random-string/random-string.component';
import { ObjectTestingComponent } from './object-testing/object-testing.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RandomStringComponent, ObjectTestingComponent, RouterLink, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'random-project';

  homeColor: string = 'black';
  randomColor: string = 'blue';
  studentColor: string = 'blue';

  changeColor(event: MouseEvent){
    const target = event.target as HTMLLinkElement;

    if(target.textContent === 'Home'){
      this.homeColor = 'green';
      this.randomColor = 'blue';
      this.studentColor = 'blue';
    }
    else if(target.textContent === 'Random'){
      this.randomColor = 'green';
      this.homeColor = 'black';
      this.studentColor = 'blue';
    }
    else if(target.textContent === 'Student'){
      this.studentColor = 'green';
      this.homeColor = 'black';
      this.randomColor = 'blue';
    }
  }

}

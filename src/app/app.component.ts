import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RandomStringComponent } from './random-string/random-string.component';
import { ObjectTestingComponent } from './object-testing/object-testing.component';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RandomStringComponent, ObjectTestingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'random-project';
  studentInfo;

  constructor(service: StudentService){
    this.studentInfo = service.getStudentInfo();
  }
}

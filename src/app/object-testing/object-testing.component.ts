import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-object-testing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './object-testing.component.html',
  styleUrl: './object-testing.component.css'
})
export class ObjectTestingComponent {

   @Input() students: any;

  


    // ngOnInit(){
      
    // }


    // displayStudentInfo(students: any){
    //   students.map()
    // }


}

import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-object-testing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './object-testing.component.html',
  styleUrl: './object-testing.component.css'
})
export class ObjectTestingComponent implements OnInit {

   students: any = [];

   selectedRows: number = 10;

   constructor(private stdService: StudentService){

   }

ngOnInit(): void {
    this.students = this.stdService.getStudentInfo();
}
}

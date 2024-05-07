import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { StudentService } from '../student.service';
import { log } from 'node:console';

@Component({
  selector: 'app-object-testing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './object-testing.component.html',
  styleUrl: './object-testing.component.css'
})
export class ObjectTestingComponent implements OnInit {

   students: any = [];

   pageSizeOptions: number[] = [2, 4, 7, 10];
   selectedPageSize: number = 4;
   currentPage: number = 1;




   constructor(private stdService: StudentService){

   }

  ngOnInit(): void {
      this.students = this.stdService.getStudentInfo();
      console.log(this.getStartIndex());
      console.log(this.getEndIndex());
  }

//   onChange(form : any){
//     console.log(
// form.control?.value

//     )
//   }

   previousPage(){
    if(this.currentPage > 1){
      this.currentPage--;
    }
   }

   nextPage(){
    this.currentPage++;
   }

   getStartIndex(): number {
    return (this.currentPage - 1) * this.selectedPageSize;
   }


   getEndIndex(): number {
    console.log(this.selectedPageSize);
    return this.getStartIndex() + this.selectedPageSize;
   }

  //  updateIndices(){
  //   this.startIndex = (this.currentPage - 1) * this.selectedPageSize;
  //   console.log(this.startIndex);
  //   this.endIndex = Math.min(this.startIndex + this.selectedPageSize, this.students.length);
  //   console.log(this.endIndex);
  //  }

   



}

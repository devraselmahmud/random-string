import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-object-testing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './object-testing.component.html',
  styleUrl: './object-testing.component.css'
})
export class ObjectTestingComponent {

   @Input() students: any;

   selectedRows: number = 10;


}

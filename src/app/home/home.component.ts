import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  data: {name: string, mobile: number}[] = [
    {name: 'Rasel1', mobile: +88017675564459},
    {name: 'Rasel2', mobile: +88017675564459},
    {name: 'Rasel3', mobile: +88017675564459},
    {name: 'Rasel4', mobile: +88017675564459},
    {name: 'Rasel5', mobile: +88017675564459},
    {name: 'Rasel6', mobile: +88017675564459},
    {name: 'Rasel7', mobile: +88017675564459},
    {name: 'Rasel8', mobile: +88017675564459},
    {name: 'Rasel9', mobile: +88017675564459},
    {name: 'Rasel10', mobile: +88017675564459},
    {name: 'Rasel11', mobile: +88017675564459},
    {name: 'Rasel12', mobile: +88017675564459},
    {name: 'Rasel13', mobile: +88017675564459},
    {name: 'Rasel14', mobile: +88017675564459},
    {name: 'Rasel15', mobile: +88017675564459},
    {name: 'Rasel16', mobile: +88017675564459},
    {name: 'Rasel17', mobile: +88017675564459},
    {name: 'Rasel18', mobile: +88017675564459},
    {name: 'Rasel19', mobile: +88017675564459},
    {name: 'Rasel20', mobile: +88017675564459},
    {name: 'Rasel21', mobile: +88017675564459},
    {name: 'Rasel22', mobile: +88017675564459},
    {name: 'Rasel23', mobile: +88017675564459},
    {name: 'Rasel24', mobile: +88017675564459},
    {name: 'Rasel25', mobile: +88017675564459},
    {name: 'Rasel26', mobile: +88017675564459},
    {name: 'Rasel27', mobile: +88017675564459},
    {name: 'Rasel28', mobile: +88017675564459},
    {name: 'Rasel29', mobile: +88017675564459},
    {name: 'Rasel30', mobile: +88017675564459},
    {name: 'Rasel31', mobile: +88017675564459},
    {name: 'Rasel32', mobile: +88017675564459},
    {name: 'Rasel33', mobile: +88017675564459},
    {name: 'Rasel34', mobile: +88017675564459},
    {name: 'Rasel35', mobile: +88017675564459},
    {name: 'Rasel37', mobile: +88017675564459},
    {name: 'Rasel37', mobile: +88017675564459},

  ];

  pageSize: number = 5;
  currentPage: number = 1;

  ngOnInit(): void {
    
  }
  
  
  
}



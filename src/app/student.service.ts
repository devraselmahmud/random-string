import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getStudentInfo(){
    return [
        {
          "name": "John Doe",
          "age": 20,
          "birthdate": "2004-05-10",
          "joining_date": "2022-09-01",
          "separation_date": null
        },
        {
          "name": "Alice Smith",
          "age": 21,
          "birthdate": "2003-03-15",
          "joining_date": "2023-01-15",
          "separation_date": null
        },
        {
          "name": "David Brown",
          "age": 19,
          "birthdate": "2005-07-20",
          "joining_date": "2021-12-05",
          "separation_date": "2024-04-25"
        },
        {
          "name": "Emma Johnson",
          "age": 22,
          "birthdate": "2002-11-30",
          "joining_date": "2020-08-10",
          "separation_date": null
        },
        {
          "name": "Michael Wilson",
          "age": 20,
          "birthdate": "2003-09-05",
          "joining_date": "2023-03-20",
          "separation_date": null
        },
        {
          "name": "Sophia Lee",
          "age": 21,
          "birthdate": "2003-01-25",
          "joining_date": "2022-05-10",
          "separation_date": null
        },
        {
          "name": "James Taylor",
          "age": 19,
          "birthdate": "2004-08-12",
          "joining_date": "2023-09-18",
          "separation_date": null
        },
        {
          "name": "Olivia Martinez",
          "age": 20,
          "birthdate": "2003-12-07",
          "joining_date": "2021-06-30",
          "separation_date": null
        },
        {
          "name": "Daniel Rodriguez",
          "age": 22,
          "birthdate": "2002-04-22",
          "joining_date": "2020-11-11",
          "separation_date": null
        },
        {
          "name": "Isabella Garcia",
          "age": 19,
          "birthdate": "2004-02-18",
          "joining_date": "2023-11-05",
          "separation_date": null
        }
    ]
  }
}

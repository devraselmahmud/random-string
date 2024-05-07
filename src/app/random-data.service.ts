import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RandomDataService {

  async getRandomData(){
    return await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(json => console.log(json));
  }
}

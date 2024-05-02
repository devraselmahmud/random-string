import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-random-string',
  standalone: true,
  imports: [],
  templateUrl: './random-string.component.html',
  styleUrl: './random-string.component.css'
})
export class RandomStringComponent {
  @Input() click: any;
  value: string = '';
  array = new Array(5);

  onClick(){
    this.generateRandom();
  }

  generateRandom() {
    var generatedString: string;
    // var array = new Array(5);
    const capacity = 5;

    do {
        generatedString = this.generateString(10);
    } while (this.array.includes(generatedString));

    

    // Store the current generated string
    if(this.array.length === capacity){
        this.array.shift();
        this.array.push(generatedString);
    }
    
    this.value = generatedString;
}

generateString(length:number) {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

}

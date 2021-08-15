import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `<button (click)="fun()"> Hello </button>
  {{name}}
  <label>MarvellousLabel</label>
  <input type="text" name="" id="">
  
   <h3> Addition Program :</h3>
  <label for="">Number 1 : </label>
  <input type="text" name="newn1" #n1 />
  <label for=""><h2> + </h2></label>
  <label for="">Number 2 : </label>
  <input type="text" name="newn2" #n2 /> <br><br>

  <button (click)="add(n1, n2)"> ADD </button> 
  <h3> Addition is : {{ans}} </h3>`
})
export class DemoComponent implements OnInit 
{
  name :string = "";
  // name : string | undefined
  fun()
  {
    this.name = "Button Clicked";
    //console.log("Button Clicked");
  }
  
  ans : number | undefined;
  add(newn1: HTMLInputElement, newn2: HTMLInputElement)
  {
    this.ans = parseInt(newn1.value) + parseInt(newn2.value);    
  }
  constructor() 
  {
    //this.name = "";
  }

  ngOnInit(): void {
  }

}

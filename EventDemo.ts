import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `<button (click)="fun()"> Hello </button>
  {{name}}
  <label>MarvellousLabel</label>
  <input type="text" name="" id="">`
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
  constructor() 
  {
    //this.name = "";
  }

  ngOnInit(): void {
  }

}

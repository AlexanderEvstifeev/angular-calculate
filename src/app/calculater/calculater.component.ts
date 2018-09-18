import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculater',
  templateUrl: './calculater.component.html',
  styleUrls: ['./calculater.component.css']
})
export class CalculaterComponent implements OnInit {

  public num1: number;
  public num2: number;
  public result: number;
   call_add(){
    this.result = this.num1 + this.num2;
  };
  call_diff(){
    this.result = this.num1 - this.num2;
  };
   call_mult(){
    this.result = this.num1 * this.num2;
  };
   call_divide(){
    this.result = this.num1 / this.num2;
  };

  constructor() { }

  ngOnInit() {

  }

}

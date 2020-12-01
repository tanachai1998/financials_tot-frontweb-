import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg5',
  templateUrl: './reg5.component.html',
  styleUrls: ['./reg5.component.css']
})
export class Reg5Component implements OnInit{

  list: string[];
  constructor() { }

  ngOnInit(): void {
    this.list = ['1','2','3','4','6','7','8'];
  }

  // count: number[];
  // name_reg : number[];
  // constructor() { }

  // ngAll(): void {
  //   for{}
  // }

}

 


import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-regulation',
  templateUrl: './regulation.component.html',
  styleUrls: ['./regulation.component.css']
})
export class RegulationComponent implements OnInit {

  list: string[];
  constructor() { }

  ngOnInit(): void {
    this.list = ['1','2','3','4','5'];
  }

 
  
}

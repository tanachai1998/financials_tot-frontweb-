import { Component, OnInit } from '@angular/core';
import { NewsAPIserviceService } from 'src/app/services/news-apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regulation',
  templateUrl: './regulation.component.html',
  styleUrls: ['./regulation.component.css']
})
export class RegulationComponent implements OnInit {
  resultnews: any=[];
  displaynews: any=[];
  list: string[];
  constructor(private router: Router,
  private newsservice: NewsAPIserviceService,) { }

  ngOnInit(): void {
    this.list = ['1','2','3','4','5'];
    this.getnew1();
  }
  getnew1(){
    this.newsservice.getNews1(1).subscribe(result => {
      this.resultnews = result
      console.log("'''",this.resultnews);
      
  
      for(var a = 0; a < 5; a++){
        // alert(";;;;;")
      this.displaynews.push({topic: this.resultnews[a].topic, 
        sector: this.resultnews[a].sector.fullName,
        image: this.resultnews[a].image
      })
      console.log(this.displaynews);
      
      
    }
    })
  }
 
  
}

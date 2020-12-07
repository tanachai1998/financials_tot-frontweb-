import { Component, OnInit, TemplateRef } from '@angular/core';
import { NewsAPIserviceService } from 'src/app/services/news-apiservice.service'
import { Router } from '@angular/router';
import { GeneratedFile } from '@angular/compiler';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  resultYear: any = []
  resultCategory: any = []
  resultNews: any = []
  displaynews: any = []


  constructor(
    private newsservice: NewsAPIserviceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.storeYear();
    this.new1();

  }
  storeYear() {
    this.newsservice.getYeardata(1,1).subscribe(result => {
      this.resultYear = result
      console.log(this.resultYear)
    })

  }

  Document(id: any) {
    this.router.navigate(['regulation/category/document', id])
  }

  new1() {
    this.newsservice.getNews1().subscribe(result => {
      this.resultNews = result
      console.log(this.resultNews);


      for (var a = 0; a < 5; a++) {
        // alert(";;;;;")
        this.displaynews.push({
          topic: this.resultNews[a].topic,
          sector: this.resultNews[a].sector.fullName,
          image: this.resultNews[a].image
        })
        console.log(this.displaynews);


      }
    })
  }
  goto(value){
    // console.log('value', value);
    
    window.open(value);
  }


}

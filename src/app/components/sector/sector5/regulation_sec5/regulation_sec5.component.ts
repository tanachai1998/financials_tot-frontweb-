import { Component, OnInit, TemplateRef } from '@angular/core';
import{ NewsAPIserviceService } from 'src/app/services/news-apiservice.service'
import { ActivatedRoute,Router } from '@angular/router';
import { GeneratedFile } from '@angular/compiler';
@Component({
  selector: 'regulation_sec5',
  templateUrl: './regulation_sec5.component.html',
  styleUrls: ['./regulation_sec5.component.css']
})
export class Regulation_sec5Component implements OnInit {
  resultCategory: any = []
  id : any = []
  constructor(
    private newsservice: NewsAPIserviceService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) { this.id = activatedRoute.snapshot.paramMap.get('id')}

  ngOnInit(): void {
    this.storeCategory();
  }
    storeCategory() {
      this.newsservice.getCategorydata(6).subscribe(result => {//this.id
        this.resultCategory = result
        // alert(6)
        console.log(this.resultCategory)
      })
    }
    Category(id: any) {
      this.router.navigate(['regulation_sec5/category', id])
    }
  
}

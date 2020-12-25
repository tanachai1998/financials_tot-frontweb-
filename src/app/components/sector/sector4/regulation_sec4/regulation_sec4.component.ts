import { Component, OnInit, TemplateRef } from '@angular/core';
import{ NewsAPIserviceService } from 'src/app/services/news-apiservice.service'
import { ActivatedRoute,Router } from '@angular/router';
import { GeneratedFile } from '@angular/compiler';
@Component({
  selector: 'regulation_sec4',
  templateUrl: './regulation_sec4.component.html',
  styleUrls: ['./regulation_sec4.component.css']
})
export class Regulation_sec4Component implements OnInit {
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
      this.newsservice.getCategorydata(5).subscribe(result => {//this.id
        this.resultCategory = result
        // alert(this.id)
        console.log(this.resultCategory)
      })
    }
    Category(id: any) {
      this.router.navigate(['regulation_sec4/category', id])
    }
  
}

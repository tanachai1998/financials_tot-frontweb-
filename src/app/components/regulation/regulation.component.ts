import { Component, OnInit, TemplateRef } from '@angular/core';
import{ NewsAPIserviceService } from 'src/app/services/news-apiservice.service'
import { ActivatedRoute,Router } from '@angular/router';
import { GeneratedFile } from '@angular/compiler';
@Component({
  selector: 'regulation',
  templateUrl: './regulation.component.html',
  styleUrls: ['./regulation.component.css']
})
export class RegulationComponent implements OnInit {
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
      this.newsservice.getCategorydata(this.id).subscribe(result => {
        this.resultCategory = result
        console.log(this.resultCategory)
      })
    }
    Category(id: any) {
      this.router.navigate(['regulation/category', id])
    }
  
}

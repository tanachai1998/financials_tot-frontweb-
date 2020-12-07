import { Component, OnInit, TemplateRef } from '@angular/core';
import{ NewsAPIserviceService } from 'src/app/services/news-apiservice.service'
import { ActivatedRoute,Router } from '@angular/router';
import { GeneratedFile } from '@angular/compiler';
@Component({
  selector: 'document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  resultFile: any[]
  files: any[]
  id : any;
  constructor(
    private newsservice: NewsAPIserviceService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) { this.id = activatedRoute.snapshot.paramMap.get('id')}

  ngOnInit(): void {
    this.storeFile();
  }
  storeFile(){
    this.newsservice.getFiledata(this.id).subscribe(result => {
      this.resultFile = result
      console.log(this.resultFile)
    })
    }
    

  
}

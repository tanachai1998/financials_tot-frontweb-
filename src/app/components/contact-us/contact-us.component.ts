import { Component, OnInit } from '@angular/core';
import { NewsAPIserviceService } from 'src/app/services/news-apiservice.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  displaynews:any=[];
  resultnews:any=[];
  constructor(
    private newsservice: NewsAPIserviceService
  ) {}

  ngOnInit(): void {
    this.news();
  }

  headerList = [
    {
      sectorName: 'ผกง. ส่วนนโยบายและแผนงานงบประมาณ',
      name: 'คุณนิตยา บริบรูณธนา (ผส. ผกง.)',
      phoneNo: '02-5749725',
      mail: 'nittayabo@tot.co.th',
    },
    {
      sectorName: 'ผกง. ส่วนนโยบายและแผนงานงบประมาณ',
      name: 'คุณนิตยา บริบรูณธนา (ผส. ผกง.)',
      phoneNo: '02-5749725',
      mail: 'nittayabo@tot.co.th',
    },
    {
      sectorName: 'ผกง. ส่วนนโยบายและแผนงานงบประมาณ',
      name: 'คุณนิตยา บริบรูณธนา (ผส. ผกง.)',
      phoneNo: '02-5749725',
      mail: 'nittayabo@tot.co.th',
    },
    {
      sectorName: 'ผกง. ส่วนนโยบายและแผนงานงบประมาณ',
      name: 'คุณนิตยา บริบรูณธนา (ผส. ผกง.)',
      phoneNo: '02-5749725',
      mail: 'nittayabo@tot.co.th',
    },
    {
      sectorName: 'ผกง. ส่วนนโยบายและแผนงานงบประมาณ',
      name: 'คุณนิตยา บริบรูณธนา (ผส. ผกง.)',
      phoneNo: '02-5749725',
      mail: 'nittayabo@tot.co.th',
    },
  ];
  news(){
    this.newsservice.getNews1().subscribe(result => {
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

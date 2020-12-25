import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsAPIserviceService } from 'src/app/services/news-apiservice.service';
import { MessageService } from 'src/app/sevices/message.service';

@Component({
  selector: 'app-new-data',
  templateUrl: './new-data.component.html',
  styleUrls: ['./new-data.component.css']
})
export class NewDataComponent implements OnInit {
  newsInfo: any;
  id: any;
  constructor(
    private messageService: MessageService,
    private apiGetData: NewsAPIserviceService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.id = activatedRoute.snapshot.paramMap.get('id')
  }

  ngOnInit() {
    // alert(this.id)
    this.messageService.sendMessage('');
    this.getNewsInfo();
  }

  getNewsInfo() {
    this.apiGetData.getNewInfo(this.id).subscribe((response) => {
      this.newsInfo = response[0]
      console.log(this.newsInfo)
    });
  }

}

import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { SlideAPIService } from '../../sevices/slide-api.service';
import { LoanBankAPIService } from 'src/app/services/loan-bank-api.service';
import { NewsAPIserviceService } from 'src/app/services/news-apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  newsData: any;
  displayData: any = [];
  loanData: any;
  showData: any = [];
  newsData1: any = [];
  url = "";
  constructor(private router: Router,
    private loanbankservice: LoanBankAPIService,
    private newsservice: NewsAPIserviceService,
    // @Inject('BASE_URL') baseUrl: string
  ) {
    this.url = "http://localhost:4200/";
  }
  a: number;
  i: number;
  q: number = 0;
  slideApi: SlideAPIService = new SlideAPIService();
  // showImage = new SlideAPIService();
  imageObject = [
    {
      pic: '../../../assets/img/bangkok-icon.png',
      // pic: "../../../assets/img/bangkok-icon.png",
      picName: 'กรุงเทพ',
    }, {
      pic: '../../../assets/img/ktb-icon.png',
      picName: 'กรุงไทย',
    }, {
      pic: '../../../assets/img/kbank-icon.png',
      picName: 'กสิกรไทย',
    },
    {
      pic: '../../../assets/img/scb-icon.png',
      picName: 'ไทยพาณิชย์',

    }, {
      pic: '../../../assets/img/krungsri-icon.png',
      picName: 'กรุงศรีอยุธยา',
    }
  ];
  ServiceSlideApi: Array<Object> = [];
  ngOnInit(): void {
    this.ServiceSlideApi = this.slideApi.imageObject;
    this.getloan();
    this.getNews1();
    this.getNews();
  }
  getNews1() {
    this.newsservice.getNews1(1).subscribe(result => {
      //  for(var i=0 ; i< this.newsdata)
      this.newsData1 = result
      console.log("new1", this.newsData1)
    })
  }
  getNews() {
    this.newsservice.getNews().subscribe(newsdetail => {
      //  for(var i=0 ; i< this.newsdata)
      this.newsData = newsdetail.articles
      console.log("newsdetail", this.newsData)
      for (var a = 0; a < 5; a++) {

        this.displayData.push({ title: this.newsData[a].title, description: this.newsData[a].description, url: this.newsData[a].url, urlToImage: this.newsData[a].urlToImage })
      }




      // console.log("articles", this.newsData.articles)
      //  this. = results.result.data
      console.log("news", this.displayData)
    })
  }
  getloan() {
    this.loanbankservice.getLoan().subscribe(results => {

      this.loanData = results.result.data
      console.log("data", this.loanData)
      console.log("datadetail", this.loanData.data_detail)
      // var q = 0;
      for (var i = 0; i < this.loanData.data_detail.length; i++) {
        if (this.loanData.data_detail[i].bank_name_th == "กรุงเทพ" || this.loanData.data_detail[i].bank_name_th == "กรุงไทย" ||
          this.loanData.data_detail[i].bank_name_th == "กสิกรไทย" || this.loanData.data_detail[i].bank_name_th == "ไทยพาณิชย์" || this.loanData.data_detail[i].bank_name_th == "กรุงศรีอยุธยา") {

          // this.showData.push({ name: this.loanData.data_detail[i].bank_name_th, mor: this.loanData.data_detail[i].mor, mlr: this.loanData.data_detail[i].mlr, mrr: this.loanData.data_detail[i].mrr})
          // console.log('------------api--------',this.showData);
          // console.log('------------obj--------',this.imageObject.length);
          this.q++;
          console.log('q == ', this.q);

          for (var j = 0; j < this.imageObject.length; j++) {
            if (this.imageObject[j].picName == this.loanData.data_detail[i].bank_name_th) {
              // console.log('-----------picture--------',this.imageObject[j].picName,'j =', j);

              // this.showData.push({ picName: this.imageObject[j].pic})
              this.showData.push({ name: this.loanData.data_detail[i].bank_name_th, mor: this.loanData.data_detail[i].mor, mlr: this.loanData.data_detail[i].mlr, mrr: this.loanData.data_detail[i].mrr, picName: this.imageObject[j].pic })

              // console.log('------------Pic--------',this.imageObject[j].pic);
              // console.log('--showdata--Pic--------',this.showData.picName);


            }
            // console.log('------------api--------',this.showData);


            //  console.log("loan" , this.loanData.data_detail[i].ceiling_rate)
          }
          console.log('------------api--------', this.showData);


        }
      }

      console.log("loan", this.showData)
    })
  }
  // images = [62, 83, 466, 965, 982, 1043].map(
  //   (n) => `https://picsum.photos/id/${n}/900/500`
  // );

  // imageObject: Array<Object> = [
  //   {
  //     pic: '../../../assets/img/cafu.jpg',
  //     goTolink: '/regulation',
  //   },{
  //     pic: '../../../assets/img/mk.jpg',
  //     goTolink: '/contact-us',
  //   },{
  //     pic: '../../../assets/img/kaka.jpeg',
  //     goTolink: '/about-us',
  //   },
  // ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }
  // onClickonSlide(url){
  //   // this.link = "regulation";

  //   var myurl = `${url}`;
  //   this.router.navigateByUrl(myurl).then(e => {
  //     if (e) {
  //       console.log("Navigation is successful!");
  //     } else {
  //       console.log("Navigation has failed!");
  //     }
  //   });
  // onClickonSlide(url,no){
  //   // this.link = "regulation";

  //     this.router.navigate([url, no]).then( (e) => {
  //       if (e) {
  //         console.log("Navigation is successful!");
  //       } else {
  //         console.log("Navigation has failed!");
  //       }
  //     });
  // }

  onClickonSlide(goTolink) {
    // this.link = "regulation";

    console.log(goTolink);
    this.router.navigate([goTolink]);
  }
  goto(value) {
    // console.log('value', value);

    window.open(value);
  }
  gotonewdata(value) {
    window.open(this.url + 'newdata/' + value);
    // window.location.href = this.url + 'newdata/' + value;
  }

  // return this.link;
}

// export interface ServiceSlideApi {
//   pic: string;
//   goTolink: string;
// }

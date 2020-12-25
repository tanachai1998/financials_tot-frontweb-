import { Injectable } from '@angular/core';
// import {ServiceSlideApi} from '../components/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class SlideAPIService {

  constructor() { }

  
    // imageObject: Array<Object> = [
    imageObject = [
      {
        pic: '../../../assets/img/ผกง3.png',
        goTolink: '/sector/sector1',
      },{
        pic: '../../../assets/img/วกง3.png',
        goTolink: '/sector/sector2',
      },{
        pic: '../../../assets/img/ทกง3.png',
        goTolink: '/sector/sector3',
      },
      {
        pic: '../../../assets/img/ลกง3.png',
        goTolink: '/sector/sector4',
      },{
        pic: '../../../assets/img/สกง5.png',
        goTolink: '/sector/sector5',
      }
    ];

    imageObject1 = [
      {
        pic: '../../../assets/img/ผกง3.png',
        goTolink: '/sector/sector1',
      },{
        pic: '../../../assets/img/ผ2.jpg',
        goTolink: '/sector/sector1',
      },{
        pic: '../../../assets/img/ผ3.jpg',
        goTolink: '/sector/sector1',
      },
      {
        pic: '../../../assets/img/ผ4.jpg',
        goTolink: '/sector/sector1',
      },{
        pic: '../../../assets/img/ผ5.jpg',
        goTolink: '/sector/sector1',
      }
    ];

    imageObject2 = [
      {
        pic: '../../../assets/img/วกง3.png',
        goTolink: '/sector/sector2',
      },{
        pic: '../../../assets/img/ว2.jpg',
        goTolink: '/sector/sector2',
      },{
        pic: '../../../assets/img/ว3.jpg',
        goTolink: '/sector/sector2',
      },
      {
        pic: '../../../assets/img/ว4.jpg',
        goTolink: '/sector/sector2',
      },{
        pic: '../../../assets/img/ว5.jpg',
        goTolink: '/sector/sector2',
      }
    ];

    imageObject3 = [
      {
        pic: '../../../assets/img/ทกง3.png',
        goTolink: '/sector/sector3',
      },{
        pic: '../../../assets/img/ท2.jpg',
        goTolink: '/sector/sector3',
      },{
        pic: '../../../assets/img/ท3.jpg',
        goTolink: '/sector/sector3',
      },
      {
        pic: '../../../assets/img/ท4.jpg',
        goTolink: '/sector/sector3',
      },{
        pic: '../../../assets/img/ท5.jpg',
        goTolink: '/sector/sector3',
      }
    ];

    imageObject4 = [
      {
        pic: '../../../assets/img/ลกง3.png',
        goTolink: '/sector/sector4',
      },{
        pic: '../../../assets/img/ล2.jpg',
        goTolink: '/sector/sector4',
      },{
        pic: '../../../assets/img/ล3.jpg',
        goTolink: '/sector/sector4',
      },
      {
        pic: '../../../assets/img/ล4.jpg',
        goTolink: '/sector/sector4',
      },{
        pic: '../../../assets/img/ล5.jpg',
        goTolink: '/sector/sector4',
      }
    ];

    imageObject5 = [
      {
        pic: '../../../assets/img/สกง5.png',
        goTolink: '/sector/sector5',
      },{
        pic: '../../../assets/img/ส2.jpg',
        goTolink: '/sector/sector5',
      },{
        pic: '../../../assets/img/ส3.jpg',
        goTolink: '/sector/sector5',
      },
      {
        pic: '../../../assets/img/ส4.jpg',
        goTolink: '/sector/sector5',
      },{
        pic: '../../../assets/img/ส5.jpg',
        goTolink: '/sector/sector5',
      }
    ];
}

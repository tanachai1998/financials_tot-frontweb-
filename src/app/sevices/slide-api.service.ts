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
        pic: '../../../assets/img/สกง.png',
        goTolink: '/sector/sector5',
      },{
        pic: '../../../assets/img/วกง.png',
        goTolink: '/sector/sector2',
      },{
        pic: '../../../assets/img/3.png',
        goTolink: '/sector/sector3',
      },
      {
        pic: '../../../assets/img/ลกง.png',
        goTolink: '/sector/sector4',
      },{
        pic: '../../../assets/img/ผกง.png',
        goTolink: '/sector/sector1',
      }
    ];
  

}

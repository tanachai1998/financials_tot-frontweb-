import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsAPIserviceService {

  constructor(private http: HttpClient) { }

getNews(){


  return this.http.get<any>("http://newsapi.org/v2/top-headlines?country=th&category=business&apiKey=71fbc02a06024c76a6656c83c37a8c0d")

}

getNews1(sector_id){
  return this.http.get<any>('http://localhost/TOTFinancial/public/api/getNews/'+ sector_id);
}
getNewInfo(news_id){
  return this.http.get<any>('http://localhost/TOTFinancial/public/api/getNewsInfo/'+ news_id);
}

}
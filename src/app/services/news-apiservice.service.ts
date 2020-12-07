import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsAPIserviceService {
  url ="";
  constructor(private http: HttpClient) { }

getNews(){

  return this.http.get<any>("http://newsapi.org/v2/top-headlines?country=th&category=business&apiKey=71fbc02a06024c76a6656c83c37a8c0d")
}

getCategorydata(sectorId){
  return this.http.get<any>("http://localhost/TOTFinancial/public/api/getCategory/"+ sectorId)
}
getYeardata(category_id,sector_id){
  return this.http.get<any>("http://localhost/TOTFinancial/public/api/getRegulationType/"+ category_id +"/sectorID/"+ sector_id)
}
getFiledata(regulation_type){
  return this.http.get<any>("http://localhost/TOTFinancial/public/api/getFile/"+ regulation_type)
}
getdocumentdata(id) {
  console.log(id);
  return this.http.get(this.url+id)
}
// getNews1(){
//   // alert("55555");
//   return this.http.get<any>('http://localhost/TOTFinancial/public/api/getNews/1')

// }

getNews1(sector_id){
  return this.http.get<any>('http://localhost/TOTFinancial/public/api/getNews/'+ sector_id);
}
getNewInfo(news_id){
  return this.http.get<any>('http://localhost/TOTFinancial/public/api/getNewsInfo/'+ news_id);
}


}
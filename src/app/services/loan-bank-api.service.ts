import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoanBankAPIService {

  constructor(private http: HttpClient) { }
  getLoan(){
    
    var myDate = new Date();
    var startperiod = myDate.getFullYear() + '-' + ('0' + (myDate.getMonth() + 1)).slice(-2) + '-' + ('0' + (myDate.getDate())).slice(-2);
    // alert(startperiod)
    // const formData = {
    //   start_period : startperiod,
    //   end_period :  startperiod
    // }
    const headerDict = {
     
      'Accept': 'application/json',
      'x-ibm-client-id': 'a07e3dce-7a1e-4ecd-86fe-d742345a43d3',
    }

    const requestOptions = {                                                                                                                                                                                 
    headers: new Headers(headerDict), 
};
    
    // alert(startperiod)
    return this.http.get<any>("https://apigw1.bot.or.th/bot/public/LoanRate/v2/loan_rate/?start_period="+startperiod+"&end_period=" +startperiod , {
       headers : headerDict
    })
  }
}


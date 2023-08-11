import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private _client : HttpClient) { }

  GetCurrencyData():Observable<any>{
    let url: string ='http://data.fixer.io/api/latest?access_key=0981097ebf3ec85ce4a50e60b219bfb0'
    return this._client.get(url);
  }
}

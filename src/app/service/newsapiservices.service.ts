import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }

  // NewsapiUrl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=688b6a0ffaac456ab4e741a285572a08";

  // tech News apiURL
  technewApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=688b6a0ffaac456ab4e741a285572a08"

  //businessnews()
  businessnewsApiUrl="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=688b6a0ffaac456ab4e741a285572a08"

  // topHeading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl)
  }

  // technews()
  techNews():Observable<any>
  {
    return this._http.get(this.technewApiUrl)
  }

  // businessnews()
  businessNews():Observable<any>
  {
    return this._http.get(this.businessnewsApiUrl)
  }
}

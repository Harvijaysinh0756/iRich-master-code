import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

let header = new HttpHeaders();
header.set('Access-Control-Allow-Origin', '*');

let BASE_URL = "https://unesco.notionprojects.tech/api";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient : HttpClient) { }

  get<T>(url : string):Observable<T>{
    return this.httpClient.get<T>(BASE_URL+url,{headers:header});
  }

  post<T>(url : string,data : any):Observable<T>{
    return this.httpClient.post<T>(BASE_URL+url,data);
  }
}

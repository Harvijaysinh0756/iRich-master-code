import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ResSiteSetting } from '../modals/resSiteSetting';
import { ResSiteContent } from '../modals/resSiteContent';

let formdata : FormData = new FormData();
formdata.append("token","123456789");

@Injectable({
  providedIn: 'root'
})
export class HeritageService {

  constructor(private httpService : HttpService) { }

  getContent = () => {
    let res = new Promise<ResSiteContent>( (resolve, reject)=> {
      this.httpService.post<ResSiteContent>("/get_content",formdata).subscribe((response)=>{
        resolve(response);
      },(error)=> {
        reject(error);
      });

    });
    return res;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ResSiteContent } from 'src/app/modals/resSiteContent';
import { HeritageService } from 'src/app/services/heritage.service';

@Component({
  selector: 'app-heritage',
  templateUrl: './heritage.component.html',
  styleUrls: ['./heritage.component.css']
})
export class HeritageComponent implements OnInit {

  Res : ResSiteContent = new ResSiteContent();

  constructor(private heritageService : HeritageService) { }

  ngOnInit(): void {
    this.heritageService.getContent().then(res => {
      console.log(res);
      this.Res = res;
    }).catch(err => {
      console.log(err);
    });
  }

}

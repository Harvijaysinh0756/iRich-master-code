import { Component, OnInit } from '@angular/core';
import { HeritageService } from 'src/app/services/heritage.service';
import { ResSiteContent } from '../../modals/resSiteContent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Response : ResSiteContent = new ResSiteContent();

  constructor(private heritageService : HeritageService) { }

  ngOnInit(): void {
   
  }

}

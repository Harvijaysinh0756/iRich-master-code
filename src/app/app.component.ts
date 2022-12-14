import { Component, OnInit } from '@angular/core';
import { DocumentHome } from './modals/document';
import { getDocumentResponse } from './modals/documents';
import { ResSiteSetting } from './modals/resSiteSetting';
import { SiteSetting } from './modals/siteSetting';
import { SiteSettingService } from './services/site-setting.service';
declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  siteSetting : SiteSetting = new SiteSetting();

  document: DocumentHome[] = new getDocumentResponse().data;
  
  constructor(private siteSettingServices : SiteSettingService){
  }

  title = 'iRich';

  ngOnInit(): void {
    
    this.siteSettingServices.getSiteSettings().then(res => {
      this.siteSetting = res.data;
    }).catch(err => {
      this.siteSetting = new ResSiteSetting().data;
    });

    this.OnPageLoad();

  }

  OnPageLoad = () => {

    $(document).ready(function () {
      $('.site-video-close-btn').on('click', function () {
        $('.site-video-content').hide();
      });
    });

  }

  
  
}

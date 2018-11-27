import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Title } from '../../shared/title.model';

@Component({
  selector: 'app-title-analytics',
  templateUrl: './title-analytics.component.html',
  styleUrls: ['./title-analytics.component.css']
})
export class TitleAnalyticsComponent implements OnInit {
  @Input() showTitleDetails: boolean = false;
  @Input() title: Title;
  indexerUrl:string;
  trustedUrl:SafeUrl;

  constructor(private sanitizer: DomSanitizer) { 
    
  }

  ngOnInit() {
   
  }
//https://api.videoindexer.ai/northeurope/Accounts/f8d93501-2228-4262-a35e-5932597a917a/Videos/GetIdByExternalId?externalId=VUBI0000002273677224_I-am-Ali
  getTrustedUrl(): SafeUrl{
    this.title.alternateId.push("urn:nb:videoindex:fb85b33ca2");
    var url = this.title.alternateId[2].split(':')[3];
    this.indexerUrl = "https://www.videoindexer.ai/embed/insights/f8d93501-2228-4262-a35e-5932597a917a/"+url+"/?version=2";
    console.log(this.indexerUrl);
    return this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.indexerUrl);
  }
}

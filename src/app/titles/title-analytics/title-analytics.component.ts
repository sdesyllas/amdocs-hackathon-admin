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
  indexerUrl:string = "https://www.videoindexer.ai/embed/insights/f8d93501-2228-4262-a35e-5932597a917a/fb85b33ca2/?version=2";
  trustedUrl:SafeUrl;

  constructor(private sanitizer: DomSanitizer) { 
    this.trustedUrl = sanitizer.bypassSecurityTrustResourceUrl(this.indexerUrl);
  }

  ngOnInit() {

  }

}

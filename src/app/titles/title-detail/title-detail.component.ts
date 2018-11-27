import { Component, OnInit, Input } from '@angular/core';
import { Title } from '../../shared/title.model';
import { ResolveItem } from '../../shared/resolveitem.model';
import { ResolveService } from 'src/app/shared/resolve.service';

@Component({
  selector: 'app-title-detail',
  templateUrl: './title-detail.component.html',
  styleUrls: ['./title-detail.component.css']
})
export class TitleDetailComponent implements OnInit {
  @Input() title: Title;
  @Input() showTitleDetails = false;
  resolveItem: ResolveItem;
  @Input() language: string;

  constructor(private resolveService: ResolveService) { }

  ngOnInit() {
    this.language = "en";
  } 

  playMovie(): void {
    //this.getResolve();
    this.title.alternateId.push("urn:nb:videoindex:fb85b33ca2");
    let url = this.title.alternateId[2].split(':')[3];
    let indexerUrl = "https://www.videoindexer.ai/accounts/f8d93501-2228-4262-a35e-5932597a917a/videos/"+url;
    window.open(indexerUrl, "_blank");
  }

  showSentiment(): void {
    //this.getResolve();
    window.open('https://www.videoindexer.ai/embed/player/f8d93501-2228-4262-a35e-5932597a917a/fb85b33ca2/', "_blank");
  }

  onLanguageChange(): void {

  }

  getResolve(): void {
    this.resolveService.getUrl(this.title.movie.split('/')[2], this.title.offer[0].split('/')[2])
      .subscribe(data => this.loadPlayBackWindow(data));
  }

  loadPlayBackWindow(data) {
    window.open('https://ampdemo.azureedge.net/azuremediaplayer.html?url='+data['Url'], "_blank");
  }
}

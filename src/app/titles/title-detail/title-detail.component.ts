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
    this.getResolve();
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

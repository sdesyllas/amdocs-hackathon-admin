import { Component, OnInit } from '@angular/core';
import { TitlesService } from '../../shared/titles.service';
import { Title } from '../../shared/title.model';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.css']
})
export class TitleListComponent implements OnInit {
  titles: Title[];

  constructor(private titlesService: TitlesService) { 

  }

  getHeroes(): void {
    this.titlesService.getTitles()
      .subscribe(data => this.titles = data['value']);
  }

  ngOnInit() {
    this.getHeroes();
  }
}

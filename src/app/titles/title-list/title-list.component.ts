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
  selectedTitle: Title;
  showCreateTitle: boolean;
  languageReset: string;

  constructor(private titlesService: TitlesService) { 

  }

  showCreateForm(){
    this.showCreateTitle = true;
  }

  getHeroes(): void {
    this.titlesService.getTitles()
      .subscribe(data => this.titles = data['value']);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onTitleSelected(title: Title) {
    this.languageReset = "en";
    console.log(title.titleSort + ' ' + this.languageReset);
    this.selectedTitle = title;
  }
}

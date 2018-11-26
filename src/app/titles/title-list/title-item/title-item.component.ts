import { Component, OnInit, Input } from '@angular/core';
import { Title } from '../../../shared/title.model';

@Component({
  selector: 'app-title-item',
  templateUrl: './title-item.component.html',
  styleUrls: ['./title-item.component.css']
})
export class TitleItemComponent implements OnInit {
  @Input() title: Title;
  constructor() { }

  ngOnInit() {
  }

}

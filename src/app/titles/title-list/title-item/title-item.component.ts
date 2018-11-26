import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Title } from '../../../shared/title.model';

@Component({
  selector: 'app-title-item',
  templateUrl: './title-item.component.html',
  styleUrls: ['./title-item.component.css']
})
export class TitleItemComponent implements OnInit {
  @Input() title: Title;
  @Output() onTitleSelected = new EventEmitter<Title>();
  @Input() anchorItem: string;

  constructor() { }

  ngOnInit() {
  }

  selectTitle() {
    this.onTitleSelected.emit(this.title);
  }
}

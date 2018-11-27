import { Component, OnInit } from '@angular/core';
import { TitleLogicAppModel } from 'src/app/shared/titlelogicapp.model';
import { LogicAppService } from '../../../shared/logicapp.service';

@Component({
  selector: 'app-create-title',
  templateUrl: './create-title.component.html',
  styleUrls: ['./create-title.component.css']
})
export class CreateTitleComponent implements OnInit {

  titleLogicAppModel: TitleLogicAppModel;
  private ccImageService: string = 'https://az-ccimage-api-s001.azureedge.net/api/image?i=';
  constructor(private logicAppService: LogicAppService) {
    this.titleLogicAppModel = new TitleLogicAppModel("", "", "", [], "", "", 0.00, 0.00, "")
   }

  ngOnInit() {
  }

  submitted = false;

  onSubmit() { 
    console.log(this.titleLogicAppModel);
    this.postTitle(this.titleLogicAppModel);
  }

  postTitle(title: TitleLogicAppModel): void {
    this.titleLogicAppModel.thumbnail = this.ccImageService+this.titleLogicAppModel.thumbnail;
    this.titleLogicAppModel.boxCover = this.ccImageService+this.titleLogicAppModel.boxCover;
    this.logicAppService.postTitle(this.titleLogicAppModel)
      .subscribe(data => this.submitted = true);
  }

  // TODO: Remove this when we're done
  get diagnostic() { 
    return JSON.stringify(this.titleLogicAppModel); 
  }
}

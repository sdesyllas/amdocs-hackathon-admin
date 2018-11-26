import { Component, OnInit } from '@angular/core';
import { Title } from '../../shared/title.model';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.css']
})
export class TitleListComponent implements OnInit {
  titles: Title[] = [
    new Title("test 1", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.", "2012", "https://az-ccimage-api-s001.azureedge.net/api/image?i=https://vucoriginne.blob.core.windows.net/images/playvu_stage/1/furniture/VX-4252145_1920x1080.PNG", "https://az-ccimage-api-s001.azureedge.net/api/image?i=https://vucoriginne.blob.core.windows.net/images/playvu_stage/1/furniture/game-of-thrones-se03-P-EN_1000x1400.png"),
    new Title("test 1", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.", "2012", "https://az-ccimage-api-s001.azureedge.net/api/image?i=https://vucoriginne.blob.core.windows.net/images/playvu_stage/1/furniture/VX-4252145_1920x1080.PNG", "https://az-ccimage-api-s001.azureedge.net/api/image?i=https://vucoriginne.blob.core.windows.net/images/playvu_stage/1/furniture/game-of-thrones-se03-P-EN_1000x1400.png"),
    new Title("test 1", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.", "2012", "https://az-ccimage-api-s001.azureedge.net/api/image?i=https://vucoriginne.blob.core.windows.net/images/playvu_stage/1/furniture/VX-4252145_1920x1080.PNG", "https://az-ccimage-api-s001.azureedge.net/api/image?i=https://vucoriginne.blob.core.windows.net/images/playvu_stage/1/furniture/game-of-thrones-se03-P-EN_1000x1400.png")
  ];

  constructor() { }

  ngOnInit() {
  }

}

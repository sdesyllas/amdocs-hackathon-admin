import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TitlesComponent } from './titles/titles.component';
import { TitleListComponent } from './titles/title-list/title-list.component';
import { TitleItemComponent } from './titles/title-list/title-item/title-item.component';
import { TitleDetailComponent } from './titles/title-detail/title-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitlesComponent,
    TitleListComponent,
    TitleItemComponent,
    TitleDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

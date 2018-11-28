import { Injectable } from '@angular/core';
import { Title } from '../shared/title.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TitlesService {
   
    constructor(
        private http: HttpClient) {
    }

  getTitles (): Observable<Title[]> {
    return this.http.get<Title[]>('https://azne-ccsearch-q004.search.windows.net/indexes/hack-movie-index/docs?api-version=2017-11-11&api-key=F3ECD68784981D0C3664FF7075B4488F&$top=999');
  }
  
}
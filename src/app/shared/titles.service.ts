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
    return this.http.get<Title[]>('https://ccsearch-q003.azureedge.net/indexes/0000d-movie-index/docs?api-version=2017-11-11&api-key=9454520FF92761E7FAABADB84FFBD150');
  }
}
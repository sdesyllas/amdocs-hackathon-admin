import { Injectable } from '@angular/core';
import { TitleLogicAppModel } from '../shared/titlelogicapp.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LogicAppService {
   
    constructor(
        private http: HttpClient) {
    }

  postTitle (title: TitleLogicAppModel): Observable<TitleLogicAppModel> {
    return this.http.post<TitleLogicAppModel>('https://prod-00.northeurope.logic.azure.com:443/workflows/5eb5d6ce6f57459f868bb6250ef83901/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1csPXxJRbK0fb5srdWfHJ4K-BqzpdsAXleD0iiIbk0Y', title)
  }

}
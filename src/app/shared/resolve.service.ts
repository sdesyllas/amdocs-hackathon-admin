import { Injectable } from '@angular/core';
import { ResolveItem } from '../shared/resolveitem.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ResolveService {
   
    constructor(
        private http: HttpClient) {
    }

  getUrl (assetId: string, offerId: string): Observable<ResolveItem> {
    var url = 'https://azne-cc-api-q003.azurewebsites.net/api/Resolve?providerId=vubiquity.co.uk&assetId='+assetId+'&OfferId='+offerId;
    console.log(url);
    return this.http.get<ResolveItem>(url);
  }
}
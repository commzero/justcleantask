import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JustCleanServiceService {

  constructor(
    private http: HttpClient,
  ) { }
  public getItems(): any {
    const apiUrl: string = environment.apiBaseUrl + '/v1/stores/item';
    return this.http.get<any[]>(apiUrl);
  }
}
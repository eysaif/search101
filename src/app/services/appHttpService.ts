import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppHttpService {
  public currentActiveResouce = { label: '1337x', key: '1337x' }; 
  constructor(private http: HttpClient) {}
  get(URL: string) {
    return this.http.get(URL, { responseType: 'json' });
  }
}

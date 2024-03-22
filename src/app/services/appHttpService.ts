import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppHttpService {
  constructor(private http: HttpClient) {}
  get(URL: string) {
    return this.http.get(URL, { responseType: 'json' });
  }
}

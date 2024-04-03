import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public searchEmitter = new Subject();
  public searchKey = '';
  constructor() {}

  triggerSearch() {
    this.searchEmitter.next({ message: 'newSearch' });
  }

  getSearchState() {
    return this.searchEmitter.asObservable();
  }
}

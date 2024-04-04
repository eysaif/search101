import { Component } from '@angular/core';
import { Constants } from './utils/constant';
import { AppHttpService } from './services/appHttpService';
import { SearchService } from './services/searchService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCollapsed = false;
  currentActiveResouce = { label: '1337x', key: '1337x' };
  resoureceList = Constants.TOR_SUB_MENU;
  searchKey = '';
  constructor(
    private appService: AppHttpService,
    private searchService: SearchService
  ) {
    this.searchKey = this.searchService.searchKey;
  }

  onClickHandler(newValue: any) {
    this.currentActiveResouce = newValue;
    this.appService.currentActiveResouce = newValue;
    this.searchService.triggerSearch();
  }

  onInputChange(value: string) {
    this.searchService.searchKey = value;
    console.log(value);
  }

  onSubmitSearch() {
    this.searchService.triggerSearch();
  }
}

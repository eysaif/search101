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

  constructor(
    private appService: AppHttpService,
    private searchService: SearchService
  ) {}
  onClickHandler(newValue: any) {
    this.currentActiveResouce = newValue;
    this.appService.currentActiveResouce = newValue;
    this.searchService.triggerSearch();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppHttpService } from 'src/app/services/appHttpService';
import { SearchService } from 'src/app/services/searchService';
import { Constants } from 'src/app/utils/constant';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit, OnDestroy {
  constructor(
    private appService: AppHttpService,
    private searchService: SearchService
  ) {}
  resoureceList: any = [];
  currentpage: number = 1;
  subscription: Subscription = new Subscription();

  ngOnInit() {
    const URL =
      Constants.API_BASE_URL +
      `${this.appService.currentActiveResouce.key}/fast`;
    this.appService.get(URL).subscribe((data) => {
      this.resoureceList = data;
    });
    this.subscription.add(
      this.searchService.getSearchState().subscribe(() => {
        this.searchOnChange();
      })
    );
  }
  changePageHandler(pageNo: any) {
    this.currentpage = pageNo;
  }

  searchOnChange() {
    const URL =
      Constants.API_BASE_URL +
      `${this.appService.currentActiveResouce.key}/fast`;
    this.appService.get(URL).subscribe((data) => {
      this.resoureceList = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

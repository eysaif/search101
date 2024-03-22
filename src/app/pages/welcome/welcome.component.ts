import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
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
    public searchService: SearchService,
    private message: NzMessageService
  ) {}
  resoureceList: any = [];
  currentpage: number = 1;
  subscription: Subscription = new Subscription();

  ngOnInit() {
    this.subscription.add(
      this.searchService.getSearchState().subscribe(() => {
        this.searchOnChange();
      })
    );
  }
  changePageHandler(pageNo: any) {
    this.currentpage = pageNo;
    if(this.searchService.searchKey) this.searchOnChange(this.currentpage);
    
  }

  searchOnChange(pageNo = 1) {
    const URL =
      Constants.API_BASE_URL +
      `${this.appService.currentActiveResouce.key}/${this.searchService.searchKey}/${pageNo}`;
    this.appService.get(URL).subscribe((data:any) => {
      this.resoureceList = data;
      if(data['error']) this.message.create('error', `${data['error']}`)
      this.currentpage = pageNo;
    },(error)=>{
      this.message.create('error', `Somthing Went Wrong. `)
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

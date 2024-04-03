import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AppHttpService } from 'src/app/services/appHttpService';
import { Constants } from 'src/app/utils/constant';
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
})
export class FavouriteComponent implements OnInit {
  imgData: any;
  pageCurrent: number = 0;
  page: number = 0;
  isLoading: boolean = false;
  constructor(
    private appService: AppHttpService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.getSavedData();
  }
  nextPage() {
    this.page++;
    this.pageCurrent += 2;
    this.getSavedData(this.pageCurrent);
  }

  prevPage() {
    if (this.page == 0) return;
    this.page--;
    this.pageCurrent -= 2;
    this.getSavedData(this.pageCurrent);
  }
  getSavedData(page = 0) {
    this.appService.get(Constants.SEEDR_API_URL + `tor/list/${page}`).subscribe(
      (data: any) => {
        console.log(data);
        this.isLoading = false;
        if (!data.message) this.imgData = data;
      },
      (error) => {
        this.isLoading = false;
        this.message.create('error', `Somthing Went Wrong. `);
      }
    );
  }

  actionHandler(data: any, action: string) {
    switch (action) {
      case 'delete':
        console.log(data, action);
        this.message.info('Deleted successfully');
        break;
      case 'copyLink':
        navigator.clipboard.writeText(data);
        this.message.create('success', `Magnet coppied!`);
        console.log(data, action);
        break;
      case 'more':
        console.log(data, action);
        break;
      case 'cancel':
        console.log(data, action);
        break;
    }
  }
}

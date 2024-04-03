import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AppHttpService } from 'src/app/services/appHttpService';
import { Constants } from 'src/app/utils/constant';

interface dialogModel {
  isVisible: boolean;
  headingText: string;
  contentValue: string;
  okText: string;
}
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
})
export class FavouriteComponent implements OnInit {
  imgData: any;
  page: number = 1;
  isLoading: boolean = false;
  dialogModel: dialogModel = {
    isVisible: false,
    headingText: '',
    contentValue: '',
    okText: 'Add magnet',
  };
  isVisible: boolean = false;
  constructor(
    private appService: AppHttpService,
    private storageService: StorageService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.getSavedData();
  }
  nextPage(value: any) {
    const skipCount = (value - 1) * 6;
    this.getSavedData(skipCount);
  }

  getSavedData(page = 0) {
    this.isLoading = true;
    this.appService.get(Constants.SEEDR_API_URL + `tor/list/${page}`).subscribe(
      (data: any) => {
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
        const URL = Constants.SEEDR_API_URL + `tor/delete`;
        this.appService.postData(URL, data).subscribe({
          next: (response: any) => {
            this.isLoading = false;
            this.imgData = this.imgData.filter(
              (item: any) => item._id != data._id
            );
            this.message.info('Deleted successfully');
          },
          error: (error: any) => {
            console.log(error);
            this.isLoading = false;
            this.message.create('error', `Somthing Went Wrong. `);
          },
        });
        break;
      case 'copyLink':
        navigator.clipboard.writeText(data);
        this.message.create('success', `Magnet coppied!`);
        break;
      case 'more':
        this.dialogModel.headingText = `Add ${data.Name} ?`;
        this.dialogModel.isVisible = true;
        break;
      case 'cancel':
        break;
    }
  }

  handleOk(): void {
    if (!this.dialogModel.contentValue) {
      this.message.warning('Please select the any one option');
      return;
    }
    let data = {
      ...this.storageService.getLocalUserCredentials(),
      magnet: this.dialogModel.contentValue,
    };
    this.dialogModel.isVisible = false;
    this.dialogModel.contentValue = '';
    this.isLoading = true;
    this.saveData(data);
  }

  handleCancel(): void {
    this.dialogModel.isVisible = false;
    this.dialogModel.contentValue = '';
  }
  saveData(data: any) {
    const URL = Constants.SEEDR_API_URL + `seedr/add`;
    this.appService.postData(URL, data).subscribe(
      (response: any) => {
        this.isLoading = false;
        this.message.create('success', `Magnet Added Successfuly!`);
      },
      (error: any) => {
        console.log(error);
        this.isLoading = false;
        this.message.create('error', `Somthing Went Wrong. `);
      }
    );
  }
}

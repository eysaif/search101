import { Component } from '@angular/core';
import { Constants } from './utils/constant';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCollapsed = false;
  currentActiveResouce = { label: '1337x', key: '1337x' }; 
  resoureceList = Constants.TOR_SUB_MENU;

  onClickHandler(newValue:any){
    this.currentActiveResouce= newValue;
  }
}

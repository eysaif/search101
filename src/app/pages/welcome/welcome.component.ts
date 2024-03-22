import { Component, OnInit } from '@angular/core';
import { AppHttpService } from 'src/app/services/appHttpService';
import { Constants } from 'src/app/utils/constant';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private appService:AppHttpService) { }
  resoureceList:any =  [];

  ngOnInit() {
    const URL = Constants.API_BASE_URL + '1337x/fast'
    this.appService.get(URL).subscribe((data)=>{
      this.resoureceList = data;
    })
  }

}

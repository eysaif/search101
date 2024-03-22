import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { NzListModule } from 'ng-zorro-antd/list';

import { WelcomeComponent } from './welcome.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [WelcomeRoutingModule,NzListModule,CommonModule,],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }

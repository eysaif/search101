import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzListModule } from 'ng-zorro-antd/list';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzInputModule,
    NzButtonModule,
    NzPaginationModule,
    NzListModule,
    NzMessageModule,
    NzSkeletonModule,
    NzSpinModule,
    NzAlertModule,
    NzFormModule,
    NzRateModule,
    NzCardModule,
    NzAvatarModule,
    NzPopconfirmModule,
    NzModalModule,
    NzRadioModule,
  ],
  exports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzInputModule,
    NzButtonModule,
    NzPaginationModule,
    NzListModule,
    NzMessageModule,
    NzSkeletonModule,
    NzSpinModule,
    NzAlertModule,
    NzFormModule,
    NzRateModule,
    NzCardModule,
    NzAvatarModule,
    NzPopconfirmModule,
    NzModalModule,
    NzRadioModule,
  ],
})
export class NzSharedModule {}

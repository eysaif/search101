import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHttpService } from './services/appHttpService';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzListModule } from 'ng-zorro-antd/list';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SearchService } from './services/searchService';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { HealthstatusDirective } from './directives/healthstatus.directive';
import { SeedrComponent } from './pages/seedr/seedr.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FavouriteComponent } from './pages/favourite/favourite.component';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

import { TextmodifierPipe } from './pipes/textmodifier.pipe';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SeedrComponent,
    FavouriteComponent,
    HealthstatusDirective,
    TextmodifierPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
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
    NzPopconfirmModule 
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    AppHttpService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

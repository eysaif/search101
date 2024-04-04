import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IconsProviderModule } from './icons-provider.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHttpService } from './services/appHttpService';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SearchService } from './services/searchService';
import { HealthstatusDirective } from './directives/healthstatus.directive';
import { SeedrComponent } from './pages/seedr/seedr.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';
import { TextmodifierPipe } from './pipes/textmodifier.pipe';
import { StorageService } from './services/storage.service';
import { NzSharedModule } from './nz-shared/nz-shared.module';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SeedrComponent,
    FavouriteComponent,
    HealthstatusDirective,
    TextmodifierPipe,
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
    NzSharedModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    AppHttpService,
    SearchService,
    StorageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

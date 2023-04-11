import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import localeIt from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeIt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    FeaturesModule,
    ToastModule
  ],
  providers: [
    MessageService,
    {
      provide: LOCALE_ID,
      useValue: 'it'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

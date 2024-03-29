import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { translocoLoader } from './transloco.loader';
import {
  TranslocoModule,
  TRANSLOCO_CONFIG,
  TranslocoConfig,
} from '@ngneat/transloco';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: {
        listenToLangChange: true,
        defaultLang: 'en',
        fallbackLang: 'es',
        prodMode: environment.production,
        scopeStrategy: 'shared',
      } as TranslocoConfig,
    },
    translocoLoader,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

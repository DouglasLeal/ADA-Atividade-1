import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Page404 } from './components/page-404/page-404';


registerLocaleData(ptBr);

@NgModule({
  declarations: [
    App,
    Navbar,
    Page404,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

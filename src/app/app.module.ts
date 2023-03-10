import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule }from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { ErrorPagesComponent } from './shared/error-pages/error-pages.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

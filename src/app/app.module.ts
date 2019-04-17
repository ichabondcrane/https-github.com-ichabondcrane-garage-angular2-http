import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MatTableModule, MatPaginatorModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    MatTableModule,
    BrowserModule,
    MatPaginatorModule ,
    BrowserAnimationsModule,
    NoopAnimationsModule 

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }

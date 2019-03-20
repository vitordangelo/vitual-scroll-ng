import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BasicScrollComponent } from './basic-scroll/basic-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    InfiniteScrollComponent,
    BasicScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

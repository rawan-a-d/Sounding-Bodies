import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScrollEmotionsComponent } from './scroll-emotions/scroll-emotions.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollEmotionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

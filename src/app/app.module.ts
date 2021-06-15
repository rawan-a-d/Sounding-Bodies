import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrentFeelingComponent } from './current-feeling/current-feeling.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentFeelingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CurrentFeelingComponent } from './current-feeling/current-feeling.component';
import { CategoriesComponent } from './current-feeling/categories/categories.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentFeelingComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

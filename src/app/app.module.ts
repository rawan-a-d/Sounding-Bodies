import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { DragscrollComponent } from './dragscroll/dragscroll.component';
import { CurrentFeelingComponent } from './current-feeling/current-feeling.component';
import { CategoriesComponent } from './current-feeling/categories/categories.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DragscrollComponent,
    CurrentFeelingComponent,
    CategoriesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

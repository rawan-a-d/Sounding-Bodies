import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottomNavModule } from 'ngx-bottom-nav';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { WheelSelectorModule } from '@hyperblob/ngx-wheel-selector';
import { DragScrollModule } from 'ngx-drag-scroll';
import { DragscrollComponent } from './dragscroll/dragscroll.component';

@NgModule({
  declarations: [
    AppComponent,
    DragscrollComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BottomNavModule,
    WheelSelectorModule,
    DragScrollModule,
  ],
  schemas: [
    NO_ERRORS_SCHEMA // for third party component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

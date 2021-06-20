import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DragScrollModule } from 'ngx-drag-scroll';
import { DragscrollComponent } from './dragscroll/dragscroll.component';
import { CurrentFeelingComponent } from './current-feeling/current-feeling.component';
import { CategoriesComponent } from './current-feeling/categories/categories.component';
import { HeaderComponent } from './header/header.component';
import { VideoSessionComponent } from "./video-session/video-session.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { WantToFeelComponent } from "./want-to-feel/want-to-feel.component";
import { ProfileComponent } from "./profile/profile.component";
import { AppSettingsComponent } from "./app-settings/app-settings.component";

@NgModule({
  declarations: [
    AppComponent,
    DragscrollComponent,
    CurrentFeelingComponent,
    CategoriesComponent,
    HeaderComponent,
    VideoSessionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragScrollModule,
    RouterModule.forRoot([
      {path: 'app', component: AppComponent},
      {path: 'current-feeling', component: CurrentFeelingComponent},
      {path: 'video-session', component: CurrentFeelingComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

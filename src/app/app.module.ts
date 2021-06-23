import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { WheelSelectorModule } from '@hyperblob/ngx-wheel-selector';
import { DragScrollModule } from 'ngx-drag-scroll';
import { CurrentFeelingComponent } from './current-feeling/current-feeling.component';
import { CategoriesComponent } from './current-feeling/categories/categories.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProfileComponent } from './profile/profile.component';

import { FanMenuModule } from 'fan-menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DragscrollComponent } from './current-feeling/dragscroll/dragscroll.component';
import { EmotionsComponent } from './current-feeling/emotions/emotions.component';

import { FeelingWishComponent } from './feeling-wish/feeling-wish.component';

@NgModule({
	declarations: [
		AppComponent,
		DragscrollComponent,
		CurrentFeelingComponent,
		CategoriesComponent,
        EmotionsComponent,
		LogInComponent,
        ProfileComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		WheelSelectorModule,
		DragScrollModule,
		FanMenuModule,
		FontAwesomeModule,
		MatButtonModule,
		MatIconModule
	],
	exports: [
		MatButtonModule,
		MatIconModule
	],
	schemas: [
		NO_ERRORS_SCHEMA // for third party component
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}

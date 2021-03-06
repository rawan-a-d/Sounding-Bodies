import { Routes, RouterModule } from '@angular/router';

import { CurrentFeelingComponent } from './current-feeling/current-feeling.component';
import { AppComponent } from './app.component';
import { VideoSessionComponent } from "./video-session/video-session.component";
import { LogInComponent } from "./log-in/log-in.component";
import { WantToFeelComponent } from "./want-to-feel/want-to-feel.component";
import { ProfileComponent } from "./profile/profile.component";
import { AppSettingsComponent } from "./app-settings/app-settings.component";

const routes: Routes = [
    {path: '', redirectTo: 'log-in', pathMatch: 'full'},
    {path: 'current-feeling', component: CurrentFeelingComponent},
    {path: 'video-session', component: VideoSessionComponent},
    {path: 'log-in', component: LogInComponent},
    {path: 'want-to-feel', component: WantToFeelComponent},
    {path: 'app-settings', component: AppSettingsComponent},
    {path: 'profile', component: ProfileComponent}

    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);

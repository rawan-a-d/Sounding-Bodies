import { Routes, RouterModule } from '@angular/router';

import { CurrentFeelingComponent } from './current-feeling/current-feeling.component';
import { AppComponent } from './app.component';
import { VideoSessionComponent } from "./video-session/video-session.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { WantToFeelComponent } from "./want-to-feel/want-to-feel.component";
import { ProfileComponent } from "./profile/profile.component";
import { AppSettingsComponent } from "./app-settings/app-settings.component";
import { DragscrollComponent } from './dragscroll/dragscroll.component';

const routes: Routes = [
    {path: 'app', component: AppComponent},
    {path: 'current-feeling', component: DragscrollComponent},
    {path: 'video-session', component: VideoSessionComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'want-to-feel', component: WantToFeelComponent},
    {path: 'app-settings', component: AppSettingsComponent},
    {path: 'profile', component: ProfileComponent}

    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);

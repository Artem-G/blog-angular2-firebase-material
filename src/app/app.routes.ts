import {Routes, RouterModule} from '@angular/router';

import {HomePageComponent} from "./home-page/home-page.component";
import {StoryComponent} from "./story/story.component";
import {StoryEditComponent} from "./story-edit/story-edit.component";
import {LoginComponent} from "./login/login.component";
import {LoggedInGuard } from "./logged-in.guard";

const routes: Routes = [
  {path: '', redirectTo: 'stories/1', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'stories/:page', component: HomePageComponent, canActivate: [LoggedInGuard]},
  {path: 'story/:id', component: StoryComponent, canActivate: [LoggedInGuard]},
  {path: 'story/edit/:id', component: StoryEditComponent, canActivate: [LoggedInGuard]},
  {path: 'new/story', component: StoryEditComponent, canActivate: [LoggedInGuard]},
];

export const Routing = RouterModule.forRoot(routes);

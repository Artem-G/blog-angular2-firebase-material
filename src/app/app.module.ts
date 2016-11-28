import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';

import {InMemoryWebApiModule} from 'angular2-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import './rxjs-extensions';

import {UserService} from './user.service';
import {LoggedInGuard} from './logged-in.guard';
import {StoryService} from './story.service';
import {Routing} from './app.routes';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {StoriesComponent} from './stories/stories.component';
import {StoryItemComponent} from './story-item/story-item.component';
import {StoryComponent} from './story/story.component';
import {StoryEditComponent} from './story-edit/story-edit.component';
import {TinyMCEComponent} from './tiny-mce/tiny-mce.component';
import {LoginComponent} from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';

const myFirebaseConfig = {
  apiKey: "AIzaSyCZ4lZ1SqAaEDSbLuO7YlqQHCd-6pkoxAw",
  authDomain: "familystories-f9c1d.firebaseapp.com",
  databaseURL: "https://familystories-f9c1d.firebaseio.com",
  storageBucket: "familystories-f9c1d.appspot.com",
  messagingSenderId: "480542445300"
}

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StoriesComponent,
    StoryItemComponent,
    StoryComponent,
    StoryEditComponent,
    TinyMCEComponent,
    LoginComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    Routing,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 600}),
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [UserService, LoggedInGuard, StoryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

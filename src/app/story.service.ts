import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import 'rxjs/add/operator/toPromise';

import {Story} from './story';
import {UserService} from './user.service';

@Injectable()
export class StoryService {
  private stories$: FirebaseListObservable<any[]>;

  private storiesUrl = 'app/stories';  // URL to web api

  constructor(public af: AngularFire,
              public user: UserService,
              private http: Http) {

    this.stories$ = this.af.database.list('stories');
  }

  // getStories(): Promise<Story[]> {
  //   return this.http
  //     .get(this.storiesUrl)
  //     .toPromise()
  //     .then(response => response.json().data as Story[])
  //     .catch(this.handleError);
  // }

  getStory(id: string): firebase.Promise<any> {
    var storyRef = this.af.database.object('stories/' + id).$ref;

    return storyRef.once('value')
      .then(snapshot => snapshot.val());
  }

  // getStory(id: string): Promise<Story> {
  //   return this.getStories()
  //     .then(stories => stories.find(story => story.id === id));
  // }

  // Add new
  addStory(story: Story): firebase.Promise<any> {
    return this.af.database.object('stories').$ref.push(story);
  }

  // private post(story: Story): Promise<Story> {
  //   let headers = new Headers({
  //     'Content-Type': 'application/json'
  //   });
  //
  //   return this.http
  //     .post(this.storiesUrl, JSON.stringify(story), {headers: headers})
  //     .toPromise()
  //     .then(res => res.json().data)
  //     .catch(this.handleError);
  // }

  // Update existing
  updateStory($key, story: Story): firebase.Promise<any> {
    return this.af.database.object('stories/' + $key).$ref.update(story);
  }

  // private put(story: Story): Promise<Story> {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //
  //   let url = `${this.storiesUrl}/${story.id}`;
  //
  //   return this.http
  //     .put(url, JSON.stringify(story), {headers: headers})
  //     .toPromise()
  //     .then(() => story)
  //     .catch(this.handleError);
  // }

  deleteStory($key, story: Story) {
    return this.af.database.object('stories/' + $key).$ref.remove();
  }

  saveStory($key = '', story: Story): firebase.Promise<any> {
    if ($key) {
      return this.updateStory($key, story);
    }
    story.created = new Date().getTime().toString();
    story.author = this.user.getUsername();

    return this.addStory(story);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

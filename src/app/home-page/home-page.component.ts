import { Component, OnInit } from '@angular/core';

import {StoriesComponent} from '../stories/stories.component';
import {StoryService} from '../story.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private storyService: StoryService) { }

  ngOnInit() {
  }

}

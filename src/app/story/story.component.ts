import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {Story} from '../story.ts';
import {StoryService} from '../story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  story: any;
  storyId: string;
  @ViewChild('textContainer') textContainer: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private storyService: StoryService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = params['id'];
        this.storyService.getStory(id)
          .then(story => {
            this.story = story;
            this.textContainer.nativeElement.innerHTML = story.text;
            this.storyId = id;
            console.log('Story: ', story);
          });
      } else {
        this.story = new Story();
      }
    });
  }
}

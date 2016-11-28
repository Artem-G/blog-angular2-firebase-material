import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {Story} from '../story.ts';
import {StoryService} from '../story.service';

@Component({
  selector: 'app-story-edit',
  templateUrl: './story-edit.component.html',
  styleUrls: ['./story-edit.component.scss']
})
export class StoryEditComponent implements OnInit {
  @Input() story: Story;
  storyId: string;
  error: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private storyService: StoryService) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = params['id'];
        this.storyService.getStory(id)
          .then(story => {
            this.story = story;
            this.storyId = id;
            console.log('Story: ', story);
          });
      } else {
        this.story = new Story();
      }
    });
  }

  saveStory(): void {
    this.storyService
      .saveStory(this.storyId, this.story)
      .then(story => {
        this.story = story; // saved story, w/ id if new

        if (!this.storyId)
          this.storyId = story.key;

        this.goBack();
      })
      .catch(error => this.error = error); // TODO: Display error message
  }

  deleteStory(): void {

    if (confirm('Вы уверены, что хотите удалить эту историю?')) {
      this.storyService
        .deleteStory(this.storyId, this.story)
        .then(_ => {
          this.router.navigate(['/']);
        })
        .catch(error => this.error = error);
    }
  }


  keyupHandlerFunction(content) {
    this.story.text = content;
  }

  goBack(): void {
    this.router.navigate(['/story', this.storyId]);
  }

}

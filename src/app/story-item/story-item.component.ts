import {Component, OnInit, Input} from '@angular/core';
import {Story} from '../story.ts';

@Component({
  selector: 'story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.scss']
})
export class StoryItemComponent implements OnInit {
  @Input() storyId: string;
  @Input() story: Story;

  constructor() {}

  ngOnInit() { }

}

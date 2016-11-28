import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Http, Headers} from '@angular/http';
import {FirebaseListObservable} from 'angularfire2';

import {Story} from '../story';
import {StoryService} from '../story.service';

@Component({
  selector: 'stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  @Input() stories: FirebaseListObservable<any[]>;
  pageSub: any;
  pageNum: number;
  error: any;

  constructor(private http: Http,
              private route: ActivatedRoute,
              private storyService: StoryService) {
  }

  ngOnInit() {
    this.pageSub = this.route.params.subscribe(params => {
      this.pageNum = +params['page'] ? +params['page'] : 1;
    });
  }
}

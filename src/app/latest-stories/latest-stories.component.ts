import { Article } from 'src/models/article';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-stories',
  templateUrl: './latest-stories.component.html',
  styleUrls: ['./latest-stories.component.scss']
})
export class LatestStoriesComponent implements OnInit {

  @Input()
  latest: Article[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

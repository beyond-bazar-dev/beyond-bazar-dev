import { Article } from 'src/models/article';
import { Component, Input, OnInit } from '@angular/core';
import { sample } from 'rxjs/operators';

@Component({
  selector: 'app-latest-stories',
  templateUrl: './latest-stories.component.html',
  styleUrls: ['./latest-stories.component.scss']
})
export class LatestStoriesComponent implements OnInit {

  @Input()
  latest: Article[] = [];

  constructor() {
    var temp = new Article()
    temp.author = "Adwait Abhyankar"
    temp.categories = ["latest_news"]
    temp.description = "Lorem ipsum dolor sit amet conseqetor"
    temp.post_title = "Title of the post"
    temp.image = "https://images.unsplash.com/photo-1638913662584-731da41f5a59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    for(let i=0;i<10;i++) {
        this.latest.push(temp)
    }
  }

  ngOnInit(): void {
  }

}

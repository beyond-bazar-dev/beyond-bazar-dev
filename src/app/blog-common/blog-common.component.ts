import { Subscription } from 'rxjs';
import { NetlifyDataService } from './../services/netlify-data.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Article } from 'src/models/article';

@Component({
  selector: 'app-blog-common',
  templateUrl: './blog-common.component.html',
  styleUrls: ['./blog-common.component.scss']
})
export class BlogCommonComponent implements OnInit, OnDestroy {

  latest : Array<Article> = []

  articles : Array<Article> = []
  
  latestSub: Subscription | undefined;

  constructor(private dataService : NetlifyDataService) {
  }

  ngOnInit(): void {
    this.latestSub = this.dataService.getAllArticles().subscribe(latest => {
      this.latest = latest;
      this.articles = latest;
    })
  }

  ngOnDestroy(): void {
    this.latestSub?.unsubscribe()
  }

}

import { NetlifyDataService } from '../services/netlify-data.service';
import { ScreenMeasureServiceService } from './../services/screen-measure-service.service';
import { Article } from 'src/models/article';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  isHandset = false;
  articles: Article[] = [];
  latest: Article[] = [];
  articleSubscription: Subscription | undefined;
  latestSubscription: Subscription | undefined;
  measureSubscription: Subscription | undefined;
  constructor(
    private measureService: ScreenMeasureServiceService,
    private dataService: NetlifyDataService
  ) {
    this.measureSubscription = measureService.layoutObservable.subscribe(
      (isHandset) => {
        this.isHandset = isHandset.valueOf();
      }
    );
  }

  ngOnInit(): void {
    this.articleSubscription = this.dataService
      .getAllArticles()
      .subscribe((arg) => (this.articles = arg));
    this.latestSubscription = this.dataService
      .getLatestNews()
      .subscribe((arg) => (this.latest = arg));
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  private unsubscribe() {
    this.articleSubscription?.unsubscribe();
    this.latestSubscription?.unsubscribe();
    this.measureSubscription?.unsubscribe();
  }
}

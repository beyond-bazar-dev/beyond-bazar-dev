import { ScreenMeasureServiceService } from './../services/screen-measure-service.service';
import { Article } from 'src/models/article';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Inject } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Inject
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isHandset = false;
  links$: Observable<ScullyRoute[]> = this.scully.available$;
  articles: Article[] = [];
  constructor(private measureService: ScreenMeasureServiceService, private scully: ScullyRoutesService) {
    measureService.layoutObservable.subscribe(
      (isHandset) => {
        this.isHandset = isHandset.valueOf()
      }
    )
  }



  ngOnInit(): void {
    this.links$.subscribe((links) => {

      this.articles = links.map(item =>
        { var singleArticle = new Article()
          singleArticle.post_title = item.title?item.title:item.post_title
          singleArticle.author = item.author?item.author:undefined
          singleArticle.description = item.description
          singleArticle.isPublished = item.published?item.published:false
          singleArticle.date = item.date
          singleArticle.slug = item.slugs?item.slugs[0]:''
          return singleArticle
        }
        )
    });
  }

}

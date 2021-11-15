import { Article } from 'src/models/article';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  links$: Observable<ScullyRoute[]> = this.scully.available$;
  articles: Article[] = [];
  constructor(private scully: ScullyRoutesService) {}

  ngOnInit(): void {
    this.links$.subscribe((links) => {
      this.articles = links.map(item =>
        { var singleArticle = new Article()
          singleArticle.post_title = item.post_title
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

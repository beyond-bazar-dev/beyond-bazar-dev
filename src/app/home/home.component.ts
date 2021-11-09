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
      console.log(links);
      this.articles = links.map(item =>
        { var singleArticle = new Article()
          singleArticle.author = item.author
          singleArticle.description = item.description
          singleArticle.isPublished = item.published?item.published:false
          singleArticle.date = item.date
          singleArticle.slug = item.slug?item.slug:''
          return singleArticle
        }
        )
    });
  }

}

import { Article } from 'src/models/article';
import { Observable } from 'rxjs';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NetlifyDataService {
  constructor(private scully: ScullyRoutesService) {}

  public getArticlesByCategory(category: String): Observable<Article[]> {
    return this.getAllArticles().pipe(
      filter((art, index) => art[index].categories.includes(category))
    );
  }

  public getInvestmentArticles(): Observable<Article[]> {
    return this.getArticlesByCategory('investment');
  }

  public getProductNews(): Observable<Article[]> {
    return this.getArticlesByCategory('product_news');
  }

  public getLatestNews(): Observable<Article[]> {
    return this.getArticlesByCategory('latest');
  }

  public getAllArticles(): Observable<Article[]> {
    return this.scully.available$.pipe(
      map((it) => {
        var articles = it.map((item) => {
          var article = new Article();
          article.post_title = item.title ? item.title : item.post_title;
          article.author = item.author ? item.author : undefined;
          article.description = item.description;
          article.isPublished = item.published ? item.published : false;
          article.date = item.date;
          article.slug = item.slugs ? item.slugs[0] : '';
          article.image = item.image? item.image : '';
          return article;
        });
        articles.filter( it => it.author !== undefined || it.author !== '')
        return articles
      })
    );
  }
}

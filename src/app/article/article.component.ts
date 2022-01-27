import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/models/article';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input('post')
  public post: Article[] = [];

  constructor() {}

  ngOnInit(): void {
  }
}

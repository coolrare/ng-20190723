import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { Article } from './articles/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'conduit!';
  subtitle = 'A place to share your <u>knowledge</u>.';

  // get list() {
  //   return this.articleService.list;
  // }
  // list = this.articleService.list;
  list: Article[];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {

    // this.articleService.queryArticleObject().subscribe(result => {
    //   this.list = result.articles;
    // });

    this.articleService.queryArticles().subscribe(articles => {
      this.list = articles;
    });
  }

  filterArticles(keyword: string) {
    this.articleService.filterArticles(keyword);
  }
}

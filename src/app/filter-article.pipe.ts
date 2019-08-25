import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './articles/article';

@Pipe({
  name: 'filterArticle'
})
export class FilterArticlePipe implements PipeTransform {

  transform(articles: Article[], keyword: string): any {
    return articles.filter(item => item.title.indexOf(keyword) !== -1);
  }

}

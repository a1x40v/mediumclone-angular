import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { SaveArticleResponseInterface } from '../../shared/types/save-article-response.interface';
import { ArticleInputInterface } from '../../shared/types/article-input.interface';
import { ArticleInterface } from '../../shared/types/article.interface';

@Injectable()
export class CreateArticleService {
  private http = inject(HttpClient);

  createArticle(
    articleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    const fullUrl = environment.apiUrl + '/articles';

    return this.http
      .post<SaveArticleResponseInterface>(fullUrl, { article: articleInput })
      .pipe(map((response) => response.article));
  }
}

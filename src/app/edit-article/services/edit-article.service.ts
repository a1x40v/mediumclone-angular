import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ArticleInputInterface } from '../../shared/types/article-input.interface';
import { ArticleInterface } from '../../shared/types/article.interface';
import { SaveArticleResponseInterface } from '../../shared/types/save-article-response.interface';

@Injectable()
export class EditArticleService {
  private http = inject(HttpClient);

  updateArticle(
    slug: string,
    articleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;

    return this.http
      .put<SaveArticleResponseInterface>(fullUrl, {
        article: articleInput,
      })
      .pipe(map((response) => response.article));
  }
}

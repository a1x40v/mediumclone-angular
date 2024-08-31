import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { GetArticleResponseInterface } from '../types/get-article-response.interface';
import { ArticleInterface } from '../types/article.interface';

@Injectable()
export class ArticleService {
  private http = inject(HttpClient);

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;

    return this.http
      .get<GetArticleResponseInterface>(fullUrl)
      .pipe(map((response) => response.article));
  }
}

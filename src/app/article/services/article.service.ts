import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable()
export class ArticleService {
  private http = inject(HttpClient);

  deleteArticle(slug: string): Observable<{}> {
    const url = `${environment.apiUrl}/articles/${slug}`;

    return this.http.delete<{}>(url);
  }
}

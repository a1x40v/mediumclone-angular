import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment';
import { GetFeedResponseInterface } from '../types/get-feed-response.interface';

@Injectable()
export class FeedService {
  private http = inject(HttpClient);

  getFeed(url: string): Observable<GetFeedResponseInterface> {
    const fullUrl = `${environment.apiUrl}${url}`;

    return this.http.get<GetFeedResponseInterface>(fullUrl);
  }
}

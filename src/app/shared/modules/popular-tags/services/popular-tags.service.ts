import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { GetPopularTagsResponseInterface } from '../types/get-popular-tags-response.interface';
import { PopularTagType } from '../../../types/popular-tag-type';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class PopularTagsService {
  private http = inject(HttpClient);

  getPopularTags(): Observable<PopularTagType[]> {
    const url = `${environment.apiUrl}/tags`;

    return this.http.get<GetPopularTagsResponseInterface>(url).pipe(
      map((response) => {
        return response.tags;
      })
    );
  }
}

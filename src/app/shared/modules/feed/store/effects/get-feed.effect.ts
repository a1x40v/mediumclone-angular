import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { GetFeedResponseInterface } from '../../types/get-feed-response.interface';
import { FeedService } from '../../services/feed.service';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from '../actions/get-feed.action';

@Injectable()
export class GetFeedEffect {
  private actions$ = inject(Actions);
  private feedService = inject(FeedService);

  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) =>
            getFeedSuccessAction({ feed })
          ),
          catchError(() => of(getFeedFailureAction()))
        );
      })
    )
  );
}

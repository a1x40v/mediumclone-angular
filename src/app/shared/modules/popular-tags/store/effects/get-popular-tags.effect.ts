import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { PopularTagType } from '../../../../types/popular-tag-type';
import { PopularTagsService } from '../../services/popular-tags.service';
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from '../actions/get-popular-tags.action';

@Injectable()
export class GetPopularTagsEffect {
  private actions$ = inject(Actions);
  private popularTagsService = inject(PopularTagsService);

  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) =>
            getPopularTagsSuccessAction({ popularTags })
          ),
          catchError(() => of(getPopularTagsFailureAction()))
        );
      })
    )
  );
}

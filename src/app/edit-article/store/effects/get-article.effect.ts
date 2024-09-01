import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { ArticleService as SharedArticleService } from '../../../shared/services/article.service';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '../actions/get-article.action';

@Injectable()
export class GetArticleEffect {
  private actions$ = inject(Actions);
  private sharedArticleService = inject(SharedArticleService);

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.sharedArticleService.getArticle(slug).pipe(
          map((article) => getArticleSuccessAction({ article })),
          catchError(() => of(getArticleFailureAction()))
        );
      })
    )
  );
}

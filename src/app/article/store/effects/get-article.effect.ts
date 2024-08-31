import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { ArticleInterface } from '../../../shared/types/article.interface';
import { ArticleService as SharedArticleService } from '../../../shared/services/article.service';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '../actions/get-article.action';

@Injectable()
export class GetArticleEffect {
  private actions$ = inject(Actions);
  private articleService = inject(SharedArticleService);

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.getArticle(slug).pipe(
          map((article: ArticleInterface) =>
            getArticleSuccessAction({ article })
          ),
          catchError(() => of(getArticleFailureAction()))
        );
      })
    )
  );
}

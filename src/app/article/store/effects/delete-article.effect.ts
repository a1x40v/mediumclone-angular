import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { ArticleService } from '../../services/article.service';
import {
  deleteArticleAction,
  deleteArticleFailureAction,
  deleteArticleSuccessAction,
} from '../actions/delete-article.action';

@Injectable()
export class DeleteArticleEffect {
  private router = inject(Router);
  private actions$ = inject(Actions);
  private articleService = inject(ArticleService);

  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.deleteArticle(slug).pipe(
          map(() => deleteArticleSuccessAction()),
          catchError(() => of(deleteArticleFailureAction()))
        );
      })
    )
  );

  redirectAfterDelete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteArticleSuccessAction),
        tap(() => {
          this.router.navigate(['/']);
        })
      ),
    {
      dispatch: false,
    }
  );
}

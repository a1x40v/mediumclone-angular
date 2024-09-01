import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { CreateArticleService } from '../../services/create-article.service';
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from '../actions/create-article.action';

@Injectable()
export class CreateArticleEffect {
  private router = inject(Router);
  private actions$ = inject(Actions);
  private createArticleService = inject(CreateArticleService);

  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({ articleInput }) => {
        return this.createArticleService.createArticle(articleInput).pipe(
          map((article) => createArticleSuccessAction({ article })),
          catchError((errorResponse) =>
            of(
              createArticleFailureAction({ errors: errorResponse.error.errors })
            )
          )
        );
      })
    )
  );

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({ article }) => {
          this.router.navigate(['/articles', article.slug]);
        })
      ),
    {
      dispatch: false,
    }
  );
}

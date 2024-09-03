import { inject, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction,
} from '../actions/update-current-user.action';

@Injectable()
export class UpdateCurrentUserEffect {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);

  updateCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCurrentUserAction),
      switchMap(({ request }) =>
        this.authService.updateCurrentUser(request).pipe(
          map((currentUser: CurrentUserInterface) =>
            updateCurrentUserSuccessAction({ currentUser })
          ),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              updateCurrentUserFailureAction({
                errors: errorResponse.error.errors,
              })
            )
          )
        )
      )
    )
  );
}

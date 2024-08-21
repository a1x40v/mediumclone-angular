import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action';
import { AuthService } from '../../services/auth.service';
import { CurrentUserInterface } from '../../../shared/types/current-user.interface';

@Injectable()
export class RegisterEffect {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) =>
        this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) =>
            registerSuccessAction({ currentUser })
          ),
          catchError(() => of(registerFailureAction()))
        )
      )
    )
  );
}

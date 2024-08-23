import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';
import {
  isSumbittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import { loginAction } from '../../store/actions/login.action';
import { LoginRequestInterface } from '../../types/login-request.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private fb = inject(FormBuilder);
  private store = inject(Store);

  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<BackendErrorsInterface | null>;

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSumbittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: '',
      password: '',
    });
  }

  onSubmit(): void {
    const request: LoginRequestInterface = { user: this.form.value };
    this.store.dispatch(loginAction({ request }));
  }
}

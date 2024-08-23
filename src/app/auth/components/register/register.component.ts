import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerAction } from '../../store/actions/register.action';
import {
  isSumbittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import { RegisterRequestInterface } from '../../types/register-request.interface';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
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
      username: ['', Validators.required],
      email: '',
      password: '',
    });
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = { user: this.form.value };
    this.store.dispatch(registerAction({ request }));
  }
}

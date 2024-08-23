import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BackendErrorMessagesComponent } from '../shared/components/backend-error-messages/backend-error-messages.component';
import { authReducer } from './store/reducers';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { RegisterEffect } from './store/effects/register.effect';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesComponent,
  ],
  providers: [AuthService],
})
export class AuthModule {}

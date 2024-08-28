import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { PaginationModule } from '../pagination/pagination.module';
import { FeedComponent } from './components/feed/feed.component';
import { GetFeedEffect } from './store/effects/get-feed.effect';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { LoadingComponent } from '../../components/loading/loading.component';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    RouterLink,
    EffectsModule.forFeature([GetFeedEffect]),
    PaginationModule,
    ErrorMessageComponent,
    LoadingComponent,
  ],
  exports: [FeedComponent],
})
export class FeedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { FeedComponent } from './components/feed/feed.component';
import { GetFeedEffect } from './store/effects/get-feed.effect';

@NgModule({
  declarations: [FeedComponent],
  imports: [CommonModule, EffectsModule.forFeature([GetFeedEffect])],
  exports: [FeedComponent],
})
export class FeedModule {}

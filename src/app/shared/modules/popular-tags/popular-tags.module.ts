import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GetPopularTagsEffect } from './store/effects/get-popular-tags.effect';
import { popularTagsReducer } from './store/reducers';
import { PopularTagsService } from './services/popular-tags.service';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('popularTags', popularTagsReducer),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    LoadingComponent,
    ErrorMessageComponent,
  ],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}

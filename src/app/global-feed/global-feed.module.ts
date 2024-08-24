import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { FeedModule } from '../shared/modules/feed/feed.module';
import { feedReducer } from '../shared/modules/feed/store/reducers';
import { FeedService } from '../shared/modules/feed/services/feed.service';
import { BannerComponent } from '../shared/components/banner/banner.component';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { ErrorMessageComponent } from '../shared/components/error-message/error-message.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
];

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('feed', feedReducer),
    FeedModule,
    BannerComponent,
    ErrorMessageComponent,
  ],
  providers: [FeedService],
})
export class GlobalFeedModule {}

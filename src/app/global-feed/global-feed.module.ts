import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { FeedModule } from '../shared/modules/feed/feed.module';
import { feedReducer } from '../shared/modules/feed/store/reducers';
import { FeedService } from '../shared/modules/feed/services/feed.service';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';

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
  ],
  providers: [FeedService],
})
export class GlobalFeedModule {}

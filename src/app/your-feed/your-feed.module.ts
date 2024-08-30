import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FeedModule } from '../shared/modules/feed/feed.module';
import { FeedService } from '../shared/modules/feed/services/feed.service';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module';
import { BannerComponent } from '../shared/components/banner/banner.component';
import { YourFeedComponent } from './components/your-feed/your-feed.component';
import { ErrorMessageComponent } from '../shared/components/error-message/error-message.component';

const routes: Routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
  },
];

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    PopularTagsModule,
    FeedTogglerModule,
    BannerComponent,
    ErrorMessageComponent,
  ],
  providers: [FeedService],
})
export class YourFeedModule {}

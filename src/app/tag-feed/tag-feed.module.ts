import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FeedModule } from '../shared/modules/feed/feed.module';
import { FeedService } from '../shared/modules/feed/services/feed.service';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module';
import { BannerComponent } from '../shared/components/banner/banner.component';
import { TagFeedComponent } from './components/tag-feed/tag-feed.component';
import { ErrorMessageComponent } from '../shared/components/error-message/error-message.component';

const routes: Routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
  },
];

@NgModule({
  declarations: [TagFeedComponent],
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
  exports: [TagFeedComponent],
})
export class TagFeedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { FeedTogglerComponent } from './components/feed-toggler/feed-toggler.component';

@NgModule({
  declarations: [FeedTogglerComponent],
  imports: [CommonModule, RouterLink, RouterLinkActive],
  exports: [FeedTogglerComponent],
})
export class FeedTogglerModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { articleReducer } from './store/reducers';
import { GetArticleEffect } from './store/effects/get-article-effect';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { ErrorMessageComponent } from '../shared/components/error-message/error-message.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('article', articleReducer),
    EffectsModule.forFeature([GetArticleEffect]),
    ErrorMessageComponent,
    LoadingComponent,
  ],
  exports: [ArticleComponent],
  providers: [SharedArticleService],
})
export class ArticleModule {}

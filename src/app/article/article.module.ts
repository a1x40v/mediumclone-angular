import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { articleReducer } from './store/reducers';
import { GetArticleEffect } from './store/effects/get-article-effect';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { TagListModule } from '../shared/modules/tag-list/tag-list.module';
import { ErrorMessageComponent } from '../shared/components/error-message/error-message.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { ArticleComponent } from './components/article/article.component';

const routes: Routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('article', articleReducer),
    EffectsModule.forFeature([GetArticleEffect]),
    RouterModule.forChild(routes),
    TagListModule,
    ErrorMessageComponent,
    LoadingComponent,
  ],
  exports: [],
  providers: [SharedArticleService],
})
export class ArticleModule {}

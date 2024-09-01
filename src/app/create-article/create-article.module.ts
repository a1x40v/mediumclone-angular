import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { createArticleReducer } from './store/reducers';
import { CreateArticleEffect } from './store/effects/create-article.effect';
import { CreateArticleService } from './services/create-article.service';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { CreateArticleComponent } from './components/create-article/create-article.component';

const routes: Routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
];

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('createArticle', createArticleReducer),
    EffectsModule.forFeature(CreateArticleEffect),
    ArticleFormModule,
  ],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}

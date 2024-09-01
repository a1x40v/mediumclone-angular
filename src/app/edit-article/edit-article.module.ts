import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { editArticleReducer } from './store/reducers';
import { EditArticleService } from './services/edit-article.service';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { GetArticleEffect } from './store/effects/get-article.effect';
import { UpdateArticleEffect } from './store/effects/update-article.effect';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';

const routes: Routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
];

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('editArticle', editArticleReducer),
    EffectsModule.forFeature([GetArticleEffect, UpdateArticleEffect]),
    ArticleFormModule,
    LoadingComponent,
  ],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}

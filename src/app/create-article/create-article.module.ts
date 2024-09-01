import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [CommonModule, RouterModule.forChild(routes), ArticleFormModule],
})
export class CreateArticleModule {}

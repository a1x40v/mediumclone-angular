import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ArticleFormComponent } from './components/article-form/article-form.component';
import { BackendErrorMessagesComponent } from '../../components/backend-error-messages/backend-error-messages.component';

@NgModule({
  declarations: [ArticleFormComponent],
  imports: [CommonModule, ReactiveFormsModule, BackendErrorMessagesComponent],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}

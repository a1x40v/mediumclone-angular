import { Component, Input } from '@angular/core';

import { ArticleInputInterface } from '../../../../types/article-input.interface';
import { BackendErrorsInterface } from '../../../../types/backend-errors.interface';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.scss',
})
export class ArticleFormComponent {
  @Input({ required: true, alias: 'initalValues' })
  initalValuesProps!: ArticleInputInterface;

  @Input({ required: true, alias: 'isSubmitting' })
  isSubmittingProps!: boolean;

  @Input({ required: true, alias: 'errors' })
  errorsProps!: BackendErrorsInterface | null;
}

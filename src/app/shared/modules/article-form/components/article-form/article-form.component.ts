import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ArticleInputInterface } from '../../../../types/article-input.interface';
import { BackendErrorsInterface } from '../../../../types/backend-errors.interface';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.scss',
})
export class ArticleFormComponent implements OnInit {
  @Input({ required: true, alias: 'initalValues' })
  initalValuesProps!: ArticleInputInterface;

  @Input({ required: true, alias: 'isSubmitting' })
  isSubmittingProps!: boolean;

  @Input({ required: true, alias: 'errors' })
  errorsProps!: BackendErrorsInterface | null;

  @Output('articleSubmit') articleSubmitEvent =
    new EventEmitter<ArticleInputInterface>();

  private fb = inject(FormBuilder);

  form!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title: this.initalValuesProps.title,
      description: this.initalValuesProps.description,
      body: this.initalValuesProps.body,
      tagList: this.initalValuesProps.tagList.join(' '),
    });
  }

  onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value);
  }
}

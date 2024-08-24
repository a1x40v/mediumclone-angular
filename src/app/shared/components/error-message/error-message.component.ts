import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-messages',
  standalone: true,
  imports: [],
  template: '<div>{{messageProps}}</div>',
})
export class ErrorMessageComponent {
  @Input({ alias: 'message' }) messageProps: string = 'Something went wrong';
}

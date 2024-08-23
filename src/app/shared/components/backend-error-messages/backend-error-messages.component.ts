import { Component, Input, OnInit } from '@angular/core';

import { BackendErrorsInterface } from '../../types/backend-errors.interface';

@Component({
  selector: 'app-backend-error-messages',
  standalone: true,
  imports: [],
  templateUrl: './backend-error-messages.component.html',
  styleUrl: './backend-error-messages.component.scss',
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input({ required: true, alias: 'backendErrors' })
  backendErrorsProps!: BackendErrorsInterface;

  errorMessages!: string[];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (name: string) => {
        const messages = this.backendErrorsProps[name].join(', ');

        return `${name} ${messages}`;
      }
    );
  }
}

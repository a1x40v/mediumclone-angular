import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { getCurrentUserAction } from './auth/store/actions/get-current-user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction());
  }
}

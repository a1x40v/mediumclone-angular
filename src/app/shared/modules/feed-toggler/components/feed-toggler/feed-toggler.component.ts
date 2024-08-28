import { Component, inject, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { isLoggedInSelector } from '../../../../../auth/store/selectors';

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrl: './feed-toggler.component.scss',
})
export class FeedTogglerComponent implements OnInit {
  @Input({ alias: 'tagName' }) tagNameProps: string | null = null;

  private store = inject(Store);

  isLoggedIn$!: Observable<boolean>;

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }
}

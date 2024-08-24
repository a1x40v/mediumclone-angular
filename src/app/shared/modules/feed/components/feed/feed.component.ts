import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { environment } from '../../../../../../environments/environment';
import { GetFeedResponseInterface } from '../../types/get-feed-response.interface';
import { getFeedAction } from '../../store/actions/get-feed.action';
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '../../store/selectors';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent implements OnInit {
  @Input({ required: true, alias: 'apiUrl' }) apiUrlProps!: string;

  private destroyRef = inject(DestroyRef);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private store = inject(Store);

  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  feed$!: Observable<GetFeedResponseInterface | null>;
  limit = environment.limit;
  baseUrl!: string;
  currentPage!: number;

  ngOnInit(): void {
    this.initalizeValues();
    this.fetchData();
    this.initializeListeners();
  }

  initalizeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  initializeListeners(): void {
    const sub = this.route.queryParams.subscribe((params) => {
      this.currentPage = Number(params['page'] || '1');
    });

    this.destroyRef.onDestroy(() => sub.unsubscribe());
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
  }
}

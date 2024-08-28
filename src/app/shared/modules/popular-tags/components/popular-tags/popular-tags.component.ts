import { Component, inject, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getPopularTagsAction } from '../../store/actions/get-popular-tags.action';
import { PopularTagType } from '../../../../types/popular-tag-type';
import {
  errorSelector,
  isLoadingSelector,
  popularTagsSelector,
} from '../../store/selectors';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrl: './popular-tags.component.scss',
})
export class PopularTagsComponent implements OnInit {
  private store = inject(Store);

  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  popularTags$!: Observable<PopularTagType[] | null>;

  ngOnInit(): void {
    this.initalizeValues();
    this.fetchData();
  }

  initalizeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
  }

  fetchData(): void {
    this.store.dispatch(getPopularTagsAction());
  }
}

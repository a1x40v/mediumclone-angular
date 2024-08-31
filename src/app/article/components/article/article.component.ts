import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, Observable } from 'rxjs';

import { getArticleAction } from '../../store/actions/get-article.action';
import { ArticleInterface } from '../../../shared/types/article.interface';
import {
  articleSelector,
  errorSelector,
  isLoadingSelector,
} from '../../store/selectors';
import { currentUserSelector } from '../../../auth/store/selectors';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  private slug!: string;

  article: ArticleInterface | null = null;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  isAuthor$!: Observable<boolean>;

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')!;
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isAuthor$ = combineLatest([
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector)),
    ]).pipe(
      map(([article, currentUser]) => {
        if (!article || !currentUser) {
          return false;
        }
        return currentUser.username === article.author.username;
      })
    );
  }

  initializeListeners(): void {
    const sub = this.store
      .pipe(select(articleSelector))
      .subscribe((article) => {
        this.article = article;
      });

    this.destroyRef.onDestroy(() => {
      sub.unsubscribe();
    });
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }
}

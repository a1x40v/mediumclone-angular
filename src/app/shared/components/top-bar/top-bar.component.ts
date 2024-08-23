import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CurrentUserInterface } from '../../types/current-user.interface';
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from '../../../auth/store/selectors';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent implements OnInit {
  private store = inject(Store);

  isLoggedIn$!: Observable<boolean>;
  isAnonymous$!: Observable<boolean>;
  currentUser$!: Observable<CurrentUserInterface | null>;

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}

/*
  TODO
  На момент загрузки страницы state.auth.isLoggedIn равно null
  В данный момент состояние null никак не обрабатывается, оба селектора возвращают false
*/

import { Component, inject, Input, OnInit } from '@angular/core';

import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnInit {
  @Input({ required: true, alias: 'total' }) totalProps!: number;
  @Input({ required: true, alias: 'limit' }) limitProps!: number;
  @Input({ required: true, alias: 'currentPage' }) currentPageProps!: number;
  @Input({ required: true, alias: 'url' }) urlProps!: string;

  private utilsService = inject(UtilsService);

  pagesCount!: number;
  pages: number[] = [];

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
    this.pages = this.utilsService.range(1, this.pagesCount);
  }
}

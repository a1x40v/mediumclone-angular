import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { UtilsService } from '../services/utils.service';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, RouterLink],
  exports: [PaginationComponent],
  providers: [UtilsService],
})
export class PaginationModule {}

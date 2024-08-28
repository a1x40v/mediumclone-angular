import { Component, Input } from '@angular/core';

import { PopularTagType } from '../../../../types/popular-tag-type';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.scss',
})
export class TagListComponent {
  @Input({ required: true, alias: 'tags' }) tagsProps!: PopularTagType[];
}

import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrl: './tag-feed.component.scss',
})
export class TagFeedComponent implements OnInit {
  private route = inject(ActivatedRoute);

  tagName!: string;
  apiUrl!: string;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);

      this.tagName = params['slug'];
      this.apiUrl = `/articles?tag=${this.tagName}`;
    });
  }
}

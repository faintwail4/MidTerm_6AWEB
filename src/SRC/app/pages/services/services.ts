import { Component } from '@angular/core';
import { CommonModule, NgIf, NgFor, AsyncPipe, UpperCasePipe } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';

import { DataService, Post } from '../../services/data';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  standalone: true,
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrls: ['./services.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgIf,
    NgFor,
    AsyncPipe,
    UpperCasePipe,
    TruncatePipe
  ]
})
export class Services {
  search = new FormControl<string>('', { nonNullable: true });
  filtered$: Observable<Post[]>;

  constructor(public data: DataService) {
    this.filtered$ = combineLatest([
      this.data.posts$,
      this.search.valueChanges.pipe(
        startWith(this.search.value),
        debounceTime(200),
        distinctUntilChanged()
      )
    ]).pipe(
      map(([posts, term]) => {
        const q = term.toLowerCase().trim();
        if (!q) return posts;

        return posts.filter(p =>
          p.title.toLowerCase().includes(q) ||
          p.body.toLowerCase().includes(q)
        );
      })
    );
  }
}

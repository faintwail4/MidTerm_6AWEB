import { Component, inject } from '@angular/core';
import { CommonModule, NgFor, NgIf, AsyncPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataService, Post } from '../../services/data';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [
    CommonModule,
    NgIf,
    NgFor,
    AsyncPipe,
    UpperCasePipe,
    TruncatePipe
  ]
})
export class Home {
  public data = inject(DataService);

  latest$: Observable<Post[]> = this.data.posts$.pipe(
    map((posts: Post[]) => posts.slice(0, 5))
  );
}

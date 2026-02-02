import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize, shareReplay, tap } from 'rxjs/operators';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly http = inject(HttpClient);
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/posts';

  private loadingSubject = new BehaviorSubject<boolean>(true);
  loading$ = this.loadingSubject.asObservable();

  private errorSubject = new BehaviorSubject<string | null>(null);
  error$ = this.errorSubject.asObservable();

  posts$: Observable<Post[]> = this.http.get<Post[]>(this.API_URL).pipe(
    tap(() => this.errorSubject.next(null)),
    catchError(() => {
      this.errorSubject.next('Failed to load service records.');
      return of([] as Post[]);
    }),
    finalize(() => this.loadingSubject.next(false)),
    shareReplay(1)
  );
}

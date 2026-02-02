import { Component, signal, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { User } from './user.model';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('midLab5');
  httpUsers = signal<User[]>([]);
  httpPosts = signal<Post[]>([]);  // <-- Make sure this line exists!

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Fetch users
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (data) => {
        this.httpUsers.set(data);
        console.log('Users loaded:', data);
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });

    // Fetch posts and limit to 5
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: (data) => {
        this.httpPosts.set(data.slice(0, 5));  // <-- Make sure this exists!
        console.log('Posts loaded (limited to 5):', data.slice(0, 5));
      },
      error: (error) => {
        console.error('Error fetching posts:', error);
      }
    });
  }
}

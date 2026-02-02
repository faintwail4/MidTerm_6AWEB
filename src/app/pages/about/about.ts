import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
  imports: [
    CommonModule,
    DatePipe
  ]
})
export class About {
  now = new Date();
}

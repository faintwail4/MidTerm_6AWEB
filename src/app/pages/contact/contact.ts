import { Component, inject } from '@angular/core';
import { CommonModule, NgIf, UpperCasePipe } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  imports: [
    CommonModule,
    NgIf,
    ReactiveFormsModule,
    UpperCasePipe,
    TruncatePipe
  ]
})
export class Contact {
  private fb = inject(FormBuilder);

  submitted = false;

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['']
  });

  submit() {
    this.submitted = true;
  }
}

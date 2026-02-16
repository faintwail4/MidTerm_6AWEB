import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-template-demo',
  standalone: true,           // <--- THIS MUST BE HERE
  imports: [FormsModule, CommonModule],
  templateUrl: './template-demo.html',
  styleUrl: './template-demo.css',
})
export class TemplateDemoComponent {
  title = 'Template Driven Demo';
  username = '';
  email = '';
  password = '';
  role = '';
  // Add these properties to support your new HTML fields
  gender = '';
  status = '';
  comments = '';

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}

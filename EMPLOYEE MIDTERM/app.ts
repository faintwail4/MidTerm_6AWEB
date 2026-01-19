import { Employee } from './employee';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'services-demo';
  public employees: {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
  }[] = [];

  constructor(
    private _employeeService: Employee) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }
}

import { Component } from '@angular/core';
import { Myservice } from '../myservice';

@Component({
  selector: 'app-new-cmp',
  imports: [NewCmp],
  templateUrl: './new-cmp.html',
  styleUrl: './new-cmp.css',
})
export class NewCmp {
  todaydate;
  newcomponent = 'Entered in new component!'
  componentproperty;
  constructor(private myservice:Myservice) {
    this.todaydate = this.myservice.showTodayDate();
    this.myservice.serviceproperty = 'Component Created';
    this.componentproperty = this.myservice.serviceproperty;
  }
}

import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  @Output() addOrder:EventEmitter<any>=new EventEmitter();
  title:string;

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    const x={
      title:this.title,
      completed:false
    }
    this.addOrder.emit(x);
  }

}

import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { OrdersService} from '../../services/orders.service';

import {Ord} from 'src/app/models/Ord'
@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  @Input() x: Ord;
  @Output() deleteOrder: EventEmitter<Ord> = new EventEmitter();
  constructor(private orderService:OrdersService) { }

  ngOnInit() {
  }
  //Set Dynamic classes
  setClasses(){
    let classes={
      x:true,
      'is-complete':this.x.completed
    }
    return classes;
  }
  onToggle(x){
    x.completed=!x.completed;
    this.orderService.toggleCompleted(x).subscribe(x =>
      console.log(x));
  }
  onDelete(x){
    this.deleteOrder.emit(x);
  }
}

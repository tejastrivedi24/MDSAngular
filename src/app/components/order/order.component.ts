import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../services/orders.service'
import {Ord} from '../../models/Ord'
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order:Ord[];

  constructor(private orderService:OrdersService) { }

  ngOnInit() {
    this.orderService.getorder().subscribe(order =>{
      this.order=order;
    });

  }
  deleteOrder(x:Ord){
    this.order=this.order.filter(t => t.id != x.id);
    this.orderService.deleteOrder(x).subscribe();
  }
  addOrder(x:Ord){
    this.orderService.addOrder(x).subscribe(x=>{
      this.order.push(x);
    });

  }

}

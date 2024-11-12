import { Component } from '@angular/core';
import { OrderService } from 'share/services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrl: './admin-orders.component.scss'
})
export class AdminOrdersComponent {
  order$: any;

  constructor(private orderSerice: OrderService) {
    this.order$ = orderSerice.getOrders();
  }
}

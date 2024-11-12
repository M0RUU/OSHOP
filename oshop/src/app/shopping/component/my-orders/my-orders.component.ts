import { switchMap } from 'rxjs/operators';
import { Component } from '@angular/core';
import { AuthService } from 'share/services/auth.service';
import { OrderService } from 'share/services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.scss'
})
export class MyOrdersComponent {
  order$: any

  constructor(
    private authsv: AuthService,
    private orderService: OrderService,
  ) 
  {
    this.order$ = this.authsv.user$
    .pipe(switchMap(user => this.orderService.getOrdersByUser(user?.uid || '')));
  }
}

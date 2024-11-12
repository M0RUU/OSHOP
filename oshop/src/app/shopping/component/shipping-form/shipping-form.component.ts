import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from 'share/services/shopping-cart.service';
import { OrderService } from 'share/services/order.service';
import { AuthService } from 'share/services/auth.service';
import { Router } from '@angular/router';
import { Order } from 'share/models/order';
import { ShoppingCart } from 'share/models/shopping-cart';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrl: './shipping-form.component.scss'
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart!: ShoppingCart;
  shipping = {
    name: '',
    addressLine1: '',
    addressLine2: '',
    city: ''
  };
  userId: string | undefined = '';
  userSubscription: Subscription = new Subscription();

  constructor(
    private shoppingCartService: ShoppingCartService,
    private orderService: OrderService,
    private authsv: AuthService,
    private router: Router) { }
  
  ngOnInit() {
    this.userSubscription = this.authsv.user$.subscribe(user => {
      this.userId = user?.uid || '';
      console.log('userId:', this.userId);  
    });  
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  async placeOrder() {
    if (!this.userId) {
      console.error('User is not logged in');
      this.router.navigate(['/login']);
      return;
    }
  
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.storeOrder(order);
    this.shoppingCartService.clearCart();
    this.router.navigate(['/order-success', result.key]);
  }
}

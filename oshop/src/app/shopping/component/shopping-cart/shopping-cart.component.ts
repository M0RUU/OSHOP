import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'share/services/shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'share/models/shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent implements OnInit {
  cart$!: Observable<ShoppingCart>;

  constructor(private shoppingCartService: ShoppingCartService){ }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }

  isEmptyCart(cart: ShoppingCart) {
    return !Object.values(cart.items).length;
  }

  clearCart() {
    this.shoppingCartService.clearCart()
  }
}

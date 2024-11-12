import { Component, Input } from '@angular/core';
import { ShoppingCart } from 'share/models/shopping-cart';

@Component({
  selector: 'shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrl: './shopping-cart-summary.component.scss'
})
export class ShoppingCartSummaryComponent {
  @Input('cart') cart!: ShoppingCart;
}

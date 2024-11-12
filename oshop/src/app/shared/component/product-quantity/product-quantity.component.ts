import { Component, Input } from '@angular/core';
import { ShoppingCartService } from 'share/services/shopping-cart.service';
import { Product } from 'share/models/product';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrl: './product-quantity.component.scss'
})
export class ProductQuantityComponent {
  @Input('product') product!: Product;
  @Input('shopping-cart') shoppingCart: any;

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.product)
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product)
  }

}

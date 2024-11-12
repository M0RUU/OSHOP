import { Component, Input } from '@angular/core';
import { Product } from 'share/models/product';
import { ShoppingCartService } from 'share/services/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input('product') product!: Product;
  @Input('show-actions') showActions: boolean = true;
  @Input('shopping-cart') shoppingCart: any;

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.product)
  }

} 

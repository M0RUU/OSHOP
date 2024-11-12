import { Observable } from 'rxjs';
import { ShoppingCart } from 'share/models/shopping-cart';
import { ShoppingCartService } from 'share/services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'check-out',
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss'
})
export class CheckOutComponent implements OnInit {
  cart$!: Observable<ShoppingCart>;
    

  constructor(private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }
}

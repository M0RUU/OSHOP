import { ShoppingCartService } from 'share/services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'share/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'share/models/product';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'share/models/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string = '';
  cart$: Observable<ShoppingCart> | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
  ) {
    
  }

  async ngOnInit() {
    this.cart$= await this.shoppingCartService.getCart();
    this.populatedProduct();
  }

  private populatedProduct() {
    this.productService
    .getAll()
    .subscribe(products => {
      this.products = products;

  this.route.queryParamMap
    .subscribe(params => { 
      this.category = params.get('category') || '';
      this.applyFilter();
    });
  });
  }

  private applyFilter() {
    this.filteredProducts = this.category 
        ? this.products.filter(p => p.category === this.category) 
        : this.products;
  }

}

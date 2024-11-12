import { Component, OnDestroy } from '@angular/core';
import { ProductService } from 'share/services/product.service';
import { Subscription } from 'rxjs';
import { Product } from 'share/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnDestroy {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  subscription: Subscription;



  constructor(private productService: ProductService) { 
    this.subscription = this.productService.getAll()
      .subscribe(products => {
        this.filteredProducts = this.products = products
      })
  }

  filter(query: string) {
    this.filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())):
      this.products;
  }

  ngOnDestroy() {
      this.subscription.unsubscribe()
  }
  
}

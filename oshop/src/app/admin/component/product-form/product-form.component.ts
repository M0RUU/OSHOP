import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'share/services/category.service';
import { Category } from 'share/models/category';
import { Observable } from 'rxjs';
import { ProductService } from 'share/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  categories$!: Observable<Category[]>;
  product: any = {};
  id: string | null = null;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.categories$ = this.categoryService.getCategories();
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.productService.get(this.id).pipe(take(1)).subscribe(p => { this.product = p });
    }
  }

  save(product: any) {
    if (this.id) {
      this.productService.update(this.id, product);
    } else {
      this.productService.create(product);
    }
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm('Are you sure wanna delete this product?'))
      return
    this.productService.delete(this.id)
    this.router.navigate(['/admin/products']);

  }
}

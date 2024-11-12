import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from 'share/services/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.scss'
})
export class ProductFilterComponent {
  categories$: Observable<any[]>;
  @Input('category') category: any;

  constructor(public categoryService: CategoryService) {
    this.categories$ = this.categoryService.getCategories();
  }
}

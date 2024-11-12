import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { Product } from 'share/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private db: AngularFireDatabase) {}

  create(product: any): Promise<any> {
    return this.db.list('/products').push(product)
      .then(() => console.log('Product created successfully.'))
      .catch((error) => console.error('Error creating product:', error));
  }

  getAll(): Observable<Product[]> {
    return this.db.list<Product>('/products').snapshotChanges().pipe(
      map(actions => 
        actions.map(action => {
          const data = action.payload.val() as Product;
          const id = action.payload.key!;
          return { ...data, id };
        })
      )
    );
  }

  get(productId: any): Observable<Product | null> {
    return this.db.object<Product>(`/products/${productId}`).valueChanges();
  }

  update(productId: string, product: any) {
    return this.db.object(`/products/${productId}`).update(product);
  }

  delete(productId: any) {
    return this.db.object(`/products/${productId}`).remove();
  }
}

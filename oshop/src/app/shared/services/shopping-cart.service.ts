import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { Product } from 'share/models/product';
import { first, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'share/models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }
  
  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db.object<ShoppingCart>('/shopping-carts/' + cartId)
      .valueChanges()
      .pipe(
        map(x => {
          if (x) {
            return new ShoppingCart(x.items);
          } else {
            return new ShoppingCart({});
          }
        })
      );
  }

  async addToCart(product: Product) {
    this.updateItem(product, 1);
  }

  async removeFromCart(product: Product) {
    this.updateItem(product, -1);
  }

  async clearCart() {
    let cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }

  private create() {
    const result = this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
    return result;
  }

  private getItem(cartId: string, productId: string): AngularFireObject<any> {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    let result = await this.create();
    const newCartId = result.key;
    if (newCartId) {
      localStorage.setItem('cartId', newCartId);
      return newCartId;
    } else {
      throw new Error('Error creating cart');
    }
  }

  private async updateItem(product: Product, change: number) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.id);

    item$.valueChanges().pipe(first()).subscribe((item: any) => {
        let quantity = (item?.quantity || 0) + change;
        if (quantity < 0) {
            item$.remove();
        } else {
            item$.update({
                title: product.title,
                imageUrl: product.imageUrl,
                price: product.price,
                quantity: quantity
            });
        }
    });
  }
}

import { Product } from "./product";
import { ShoppingCartItem } from "./shopping-cart-item";

export class ShoppingCart {
    _items: ShoppingCartItem[] = [];

    constructor(public items: { [productId: string]: ShoppingCartItem } = {}) {
        this.items = items;

        for (let productId in items) {
            let item = items[productId];
            this._items.push(new ShoppingCartItem({ ...item, id: productId }))
        }
    }

    getQuantity(product: Product) {
        let item = this.items[product.id];
        return item ? item.quantity : 0;
    }

    get totalPrice() {
        let sum = 0;
        for (let item of this._items) {
            sum += item.totalPrice;
        }
        return sum;
    }


    get totalItemsCount() {
        let count = 0;
        for (let productId in this.items)
            count += this.items[productId].quantity;
        return count;
    }
}

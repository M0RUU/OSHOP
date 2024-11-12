import { Product } from "./product";

export class ShoppingCartItem {
  id: string; 
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;
  category: string;
  
  constructor(init?: Partial<ShoppingCartItem>) {
    this.id = init?.id || ''
    this.title = init?.title || ''
    this.imageUrl = init?.imageUrl || ''
    this.price = init?.price || 0
    this.quantity = init?.quantity || 0
    this.category = init?.category || ''
  }

  get totalPrice() {
    return this.price * this.quantity;
  }
}

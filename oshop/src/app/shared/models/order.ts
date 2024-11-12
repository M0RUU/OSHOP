import { ShoppingCart } from "./shopping-cart";

export class Order {
    datePlaced: number;
    items: any[] = [];

    constructor(
        public userId: string, 
        public shipping: { name: string, addressLine1: string, addressLine2: string, city: string },
        public shoppingCart: ShoppingCart) 
    {
        this.datePlaced = new Date().getTime();

        this.items = shoppingCart._items.map(i => {
            return {
              product: {
                title: i.title,
                imageUrl: i.imageUrl,
                price: i.price
              },
              quantity: i.quantity,
              totalPrice: i.totalPrice
            }
        })
    }

  }
  
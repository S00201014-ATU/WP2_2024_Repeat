import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { CartItem } from './cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private cartItems: CartItem[] = [];

  private products: Product[] = [
    {
      id: 1,
      name: 'Manchester United',
      price: 29.99,
      description: 'Red Devils are here to stay.',
      imageUrl: 'https://www.sportsdirect.com/images/products/37893608_l.jpg'
    },
    {
      id: 2,
      name: 'Tottenham Hotspur',
      price: 39.99,
      description: 'Will they finally win a trophy?',
      imageUrl: 'https://www.sportsdirect.com/images/products/37835501_l.jpg'
    },
    {
      id: 3,
      name: 'Newcastle United',
      price: 19.99,
      description: 'New owners does not always mean success.',
      imageUrl: 'https://www.sportsdirect.com/images/products/37719803_l.jpg'
    },
    {
      id: 4,
      name: 'Everton',
      price: 59.99,
      description: 'Life can tough at the bottom.',
      imageUrl: 'https://www.sportsdirect.com/images/products/37709518_l.jpg'
    },
    {
      id: 5,
      name: 'Burnley',
      price: 9.99,
      description: 'New division, new dreams.',
      imageUrl: 'https://www.sportsdirect.com/images/products/37693708_l.jpg'
    },
    {
      id: 6,
      name: 'Wolverhampton Wanderers',
      price: 99.99,
      description: 'Another medicore season pending.',
      imageUrl: 'https://shop.wolves.co.uk/siteimg/productimages/4107-603.jpg'
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId);
  }

  addToCart(product: Product, quantity: number): void {
    const existingItemIndex = this.cartItems.findIndex(item => item.product.id === product.id);

    if (existingItemIndex !== -1) {
      this.cartItems[existingItemIndex].quantity += quantity;
    } else {
      const newItem: CartItem = {
        product,
        quantity,
        totalPrice: product.price * quantity
      };
      this.cartItems.push(newItem);
    }
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }
}

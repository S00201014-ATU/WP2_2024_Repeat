
import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cartItems = this.productService.getCartItems();
  }

  calculateTotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.cartItems) {
      totalPrice += item.product.price * item.quantity;
    }
    return Math.round(totalPrice * 100) / 100;
  }

  updateTotalPrice(item: CartItem): void {
    item.totalPrice = item.product.price * item.quantity;
  }

  decrementQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateTotalPrice(item);
    }
  }

  incrementQuantity(item: CartItem): void {
    item.quantity++;
    this.updateTotalPrice(item);
  }
}

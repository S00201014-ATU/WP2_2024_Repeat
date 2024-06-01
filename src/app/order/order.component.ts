// order.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  totalPrice: number = 0;

  constructor() { }

  ngOnInit(): void {
    // Assuming you have a service to retrieve the total price
    // You can adjust this logic as needed
    this.totalPrice = this.getTotalPriceFromCart();
  }

  placeOrder(): void {
    // Logic to handle order placement
    console.log("Order placed!");
    // You can add further logic here, such as sending the order details to a backend service
  }

  // Mock function to retrieve total price from cart
  getTotalPriceFromCart(): number {
    // Replace this with your actual logic to calculate the total price from the cart
    return 100; // For demonstration, return a static value
  }
}

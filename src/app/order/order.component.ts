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
    this.totalPrice = this.getTotalPriceFromCart();
  }

  placeOrder(): void {
    console.log("Order placed!");
  }

  getTotalPriceFromCart(): number {
    return 100;
  }
}

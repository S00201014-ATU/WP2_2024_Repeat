// src/app/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  viewDetails(productId: number): void {
    this.router.navigate(['/product', productId]);
  }

  editProduct(productId: number): void {
    this.router.navigate(['/edit-product', productId]);
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId);
    this.products = this.productService.getProducts();
  }
}

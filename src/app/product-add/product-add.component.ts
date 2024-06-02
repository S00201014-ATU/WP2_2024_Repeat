import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    imageUrl: ''
  };

  constructor(private productService: ProductService, private router: Router) {}

  addProduct(): void {
    const products = this.productService.getProducts();
    this.product.id = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;

    if (this.isFormValid()) {
      this.productService.addProduct(this.product);
      this.router.navigate(['/']);
    }
  }

  isFormValid(): boolean {
    return this.product.name.trim() !== '' &&
           this.product.description.trim() !== '' &&
           this.product.price > 0 &&
           this.product.imageUrl.trim() !== '';
  }

  cancelAdd(): void {
    this.router.navigate(['/']);
  }
}

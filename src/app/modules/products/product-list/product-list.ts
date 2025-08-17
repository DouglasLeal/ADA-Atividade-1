import { Component, OnInit } from '@angular/core';
import { Product } from '../../../types/product';
import { ProductService } from '../../../services/product-service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {
  public products: Product[] = [];

  public loadingProducts: boolean = false;


  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadingProducts = true;

    this.productService.get().subscribe(result => {
      this.products = result.products;
      this.loadingProducts = false;   
    })
  }
}

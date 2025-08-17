import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product-service';
import { Product } from '../../../types/product';
import { CartService } from '../../../services/cart-service';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetail implements OnInit {

  private productId: number | null = null;
  public product: Product | null = null;

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService, 
    private cartService: CartService) { }


  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.productId) {
      this.productService.getById(this.productId).subscribe(product => {

        this.product = product;
      });
    }
  }

  addItem(){
    this.cartService.addItem(this.product!);
  }
}

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
  public loadingProduct: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService, 
    private cartService: CartService) { }


  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadingProduct = true;

    if (this.productId) {
      this.productService.getById(this.productId).subscribe(product => {
        console.log(product)
        this.product = product;
        this.loadingProduct = false;
      });
    }
  }

  addItem(){
    this.cartService.addItem(this.product!);
  }
}

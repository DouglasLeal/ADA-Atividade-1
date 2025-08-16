import { Component, Input } from '@angular/core';
import { Product } from '../../../types/product';

@Component({
  selector: 'app-product-list-item',
  standalone: false,
  templateUrl: './product-list-item.html',
  styleUrl: './product-list-item.scss'
})
export class ProductListItem {
  @Input() product!: Product;
}

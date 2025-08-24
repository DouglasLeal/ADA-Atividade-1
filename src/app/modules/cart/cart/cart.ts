import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart-service';
import { CartItem } from '../../../types/cart-item';
import { Product } from '../../../types/product';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart implements OnInit {
  cartItens: CartItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartItens$.subscribe(result => {
      this.cartItens = result;
    })
  }

  getTotal(){
    return this.cartItens.reduce((acc, item) => acc + item.price * item.quantity, 0);

  }

  removeItem(item: CartItem){
    this.cartService.removeItem(item);
  }

  addItem(item: CartItem){
    this.cartService.addItem(item);
  }

}
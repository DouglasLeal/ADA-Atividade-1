import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../types/product';
import { CartItem } from '../types/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemCount = new BehaviorSubject<number>(0);
  itemCount$ = this.itemCount.asObservable();

  private cartItens = new BehaviorSubject<CartItem[]>([]);
  cartItens$ = this.cartItens.asObservable();

  constructor(){}

  addItem(product: Product){
    this.itemCount.next(this.itemCount.value + 1);

    let itens = this.cartItens.value;

    let item = itens.find(i => i.id === product.id);

    if(item){
      item.quantity++;
    } else {
      itens.push({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
        image: product.images[0]
      })
    }

    this.cartItens.next([...this.cartItens.value]);
  }

  removeItem(){
    this.itemCount.next(this.itemCount.value - 1);
  }

  clearCart(){
    this.itemCount.next(0);
  }
}

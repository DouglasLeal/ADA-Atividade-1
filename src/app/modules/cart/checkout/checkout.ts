import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth-service';
import { User } from '../../../types/user';
import { CartService } from '../../../services/cart-service';
import { CartItem } from '../../../types/cart-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss'
})
export class Checkout implements OnInit {

  user: User | null = null;
  cartItens: CartItem[] = [];

  constructor(
    private authService: AuthService, 
    private cartService: CartService,
    private router: Router){} 

  ngOnInit(): void {
    this.authService.loggedUser$.subscribe(user => {
      this.user = user;
    })

    this.cartService.cartItens$.subscribe(itens => {
      this.cartItens = itens;
    })
  }

  getTotal(){
    return this.cartItens.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  closeModal(){
    this.cartService.clearCart();
     this.router.navigate(['/']);
  }

}

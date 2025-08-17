import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar implements OnInit {
  itemCount = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.itemCount$.subscribe(result => {
      this.itemCount = result;
    })

  }
}

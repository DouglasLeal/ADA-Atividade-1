import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { User } from '../../types/user';
import { AuthService } from '../../services/auth-service';
import { LocalStorageUtil } from '../../utils/local-storage-util';
@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar implements OnInit {
  itemCount = 0;
  loggedUser: User | null = null;

  constructor(private cartService: CartService, private authService: AuthService) { }

  ngOnInit(): void {
    this.cartService.itemCount$.subscribe(result => {
      this.itemCount = result;
    })

    this.authService.loggedUser$.subscribe(result => {
      this.loggedUser = result;
    })

    if(this.loggedUser == null){
      let user = LocalStorageUtil.getLoggedUser();

      if(user != null){
        this.authService.login(user);
      }
    }
  }

  logout(){
    this.authService.logout();
  }
}

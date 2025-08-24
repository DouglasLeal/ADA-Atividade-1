import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth-service';
import { User } from './types/user';
import {LocalStorageUtil} from './utils/local-storage-util';
import { CartService } from './services/cart-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  
  loggedUser: User | null = null; 

  constructor(private authService: AuthService, 
    private cartService: CartService){}

  ngOnInit(): void {
    this.verifyTestAccountExists();
    this.loadCardItensFromLocalStorage();
  }

  private verifyTestAccountExists(){
    const userExists = LocalStorageUtil.getUserByEmail("teste@email.com");
    if(!userExists){
      this.createTestAccount();
    }
  }

  private createTestAccount(){
    let user: User = {
      name: "Teste",
      email: "teste@email.com",
      password: "teste123",
      address: {
        street: "Rua Teste",
        number: "123",
        city: "Cidade Teste",
        state: "Estado Teste",
        zip: "24400000"
      }
    };

    this.authService.registerUser(user);
  }

  private loadCardItensFromLocalStorage(){
    this.cartService.getCartItensFromLocalStorage();
  }
}

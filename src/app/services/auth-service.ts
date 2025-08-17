import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageUtil } from '../utils/local-storage-util';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedUser = new BehaviorSubject<User | null>(null);
  loggedUser$ = this.loggedUser.asObservable();

  constructor(private router: Router){}


  
  registerUser(user: User){
    const userExists = LocalStorageUtil.getUserByEmail(user.email);

    if (userExists) {
      throw new Error('Email já cadastrado');
    }else{
      LocalStorageUtil.addUser(user);
    }    
  }

  login(user: User){
    const userExists = LocalStorageUtil.getUserByEmail(user.email);
    if (userExists) {
      if (userExists.password === user.password) {
        LocalStorageUtil.setLoggedUser(userExists);
        this.loggedUser.next(userExists);
      }
    }else{
      throw new Error('Email ou senha inválidos');
    }
  }
  
  logout(){
    LocalStorageUtil.clearLoggedUser();
    this.loggedUser.next(null);
    this.router.navigate(['/auth/login']);
  }
}

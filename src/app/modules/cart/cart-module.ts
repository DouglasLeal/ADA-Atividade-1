import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing-module';
import { Cart } from './cart/cart';
import { Checkout } from './checkout/checkout';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Cart,
    Checkout
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule
  ]
})
export class CartModule { }

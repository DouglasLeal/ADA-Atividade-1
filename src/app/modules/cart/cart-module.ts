import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing-module';
import { Cart } from './cart/cart';
import { Checkout } from './checkout/checkout';


@NgModule({
  declarations: [
    Cart,
    Checkout
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }

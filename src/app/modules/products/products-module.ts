import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing-module';
import { ProductList } from './product-list/product-list';
import { ProductListItem } from './product-list-item/product-list-item';


@NgModule({
  declarations: [
    ProductList,
    ProductListItem
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }

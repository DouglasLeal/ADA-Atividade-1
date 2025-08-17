import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'produtos',
    pathMatch: 'full'
  },
  { 
    path: 'produtos',
    loadChildren: () => import('./modules/products/products-module').then(m => m.ProductsModule),
    canActivate: [authGuard]

  },
  {
    path: 'checkout',
    loadChildren: () => import('./modules/cart/cart-module').then(m => m.CartModule)
  },
  { 
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth-module').then(m => m.AuthModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

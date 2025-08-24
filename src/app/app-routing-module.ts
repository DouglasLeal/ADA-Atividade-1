import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { Page404 } from './components/page-404/page-404';
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
    loadChildren: () => import('./modules/cart/cart-module').then(m => m.CartModule),
    canActivate: [authGuard]  },
  { 
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth-module').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: Page404,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

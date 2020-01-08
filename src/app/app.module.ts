import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProductsComponent } from './products/products.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutCartComponent } from './checkout-cart/checkout-cart.component';
import { HomeComponent } from './home/home.component';


const myRoots: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user-information',
    component: UserDetailsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'cart',
    component: CartDetailsComponent
  },
  {
    path: 'checkout-cart',
    component: CheckoutCartComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    ProductsComponent,
    CartDetailsComponent,
    CheckoutCartComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoots)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Router } from '@angular/router';
//import { CartDetails } from '../user';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService, private router: Router) { }

  cartItems = JSON.parse(sessionStorage.getItem('totalSelectedItems'));
  totalPrice = JSON.parse(sessionStorage.getItem('payableAmount'));
  showHideHome: boolean = true;

  ngOnInit() {
    console.log("cartItems:", this.cartItems);
    console.log("cartTotal:", this.totalPrice);
  }

  updateQuantity(cartitem, value) {
    this.shoppingCartService.getTotalPrice(cartitem, value);
    this.totalPrice = JSON.parse(sessionStorage.getItem('payableAmount'));
  }

  placeOrder() {
    this.router.navigate(['/checkout-cart']);
  }
}

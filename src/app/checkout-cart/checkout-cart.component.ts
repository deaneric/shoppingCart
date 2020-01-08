import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.scss']
})
export class CheckoutCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService, private router: Router) { }

  userDetails = this.shoppingCartService.getUserDetails();
  cartDetails = JSON.parse(sessionStorage.getItem('totalSelectedItems'));
  finalAmount = JSON.parse(sessionStorage.getItem('payableAmount'));
  showHideHome: boolean = true;

  ngOnInit() { }

  downloadAsPDF() {
    window.print();
    this.router.navigate(['/home']);
    this.shoppingCartService.resetAll();
    window.setTimeout(function () {
      window.location.reload();
    }, 1000);

  }

}

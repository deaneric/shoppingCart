import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Router } from '@angular/router';
import { Product } from '../user';
import { PRODUCTS } from '../user';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  //userDetails: any;
  products = PRODUCTS;
  cartSize: number = 0;
  //showCartBtn: boolean;
  showCartBtn: boolean = false;
  showHideHome: boolean = true;
  genre = null;
  format = null;
  cartItems: any;
  //selectedProducts: any;
  //filter: boolean = false;
  minimumPrice: string = "Min";
  minPrice: number = 0;
  maximumPrice: number = 3000;
  showFilter: boolean = false;

  constructor(private shoppingCartService: ShoppingCartService, private router: Router) { }

  ngOnInit() {
    //let showBtnStatus = this.shoppingCartService.buyBtnStatus;    
    //this.showCartBtn = false;   
    this.cartSize = this.shoppingCartService.getCartSize();
  }

  storeInCart(item: any) {
    item.showCartBtn = true;
    this.shoppingCartService.addToCart(item, item.showCartBtn);
    this.cartSize = this.shoppingCartService.getCartSize();
  }

  deleteInCart(item: any) {
    item.showCartBtn = false;
    this.shoppingCartService.removeFromCart(item);
    this.cartSize = this.shoppingCartService.getCartSize();
  }

  checkoutCart() {
    this.shoppingCartService.cartList();
    this.router.navigate(['/cart']);

  }

  getType(genreValue, type) {
    console.log("Products:", this.products);
    console.log("genreValue:", genreValue);
    console.log("type:", type);

    this.showFilter = true;

    if (this.products.length === 0) {
      console.log("ProductsEmpty:", this.products);
      this.products = PRODUCTS;
      console.log("ProductsFilLED:", this.products);
    }


    if (type == "genre") {
      console.log("GENRE")
      console.log("Products-2:", this.products);
      this.products = this.products.filter(filteredProduct => {
        if (filteredProduct.genre == genreValue) {
          return filteredProduct;
        }
      });
      console.log("filteredProduct-1", this.products);
    }
    else if (type == "format") {
      console.log("FORMAT")
      console.log("Products-3:", this.products);
      this.products = this.products.filter(filteredProduct => {
        if (filteredProduct.format == genreValue) {
          return filteredProduct;
        }
      });
      console.log("filteredProduct-2", this.products);
    }
  }

  sortLowToHigh() {
    this.products.sort((x, y) => (x.price) - (y.price));
  }

  sortHighToLow() {
    this.products.sort((x, y) => (y.price) - (x.price));
  }

  sortAlphabet() {
    function compareStrings(x, y) {
      // Assuming you want case-insensitive comparison
      x = x.toLowerCase();
      y = y.toLowerCase();
      return (x < y) ? -1 : (x > y) ? 1 : 0;
    }
    this.products.sort((x, y) => compareStrings(x.name, y.name));
  }

  getMinimumPrice(value) {
    console.log("VALUE:", value);
    console.log("MAX:", this.maximumPrice);
    this.showFilter = true;
    let maxPrice = this.maximumPrice;
    this.products = this.products.filter(function (x) { return x.price >= value && x.price <= maxPrice });
  }

  getMaximumPrice(value) {
    console.log("VALUE:", value);
    console.log("MIN:", this.minPrice);
    this.showFilter = true;
    this.maximumPrice = value;
    let minPrice = this.minPrice;
    this.products = this.products.filter(function (x) { return x.price >= minPrice && x.price <= value });
   // console.log("MAX:", this.maximumPrice);
  }

  clearAllFilter() {
    this.genre = null;
    this.format = null;
    this.showFilter = false;
    this.products = PRODUCTS;
  }
}

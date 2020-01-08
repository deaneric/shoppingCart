import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  selectedItems: any[] = [];
  itemListLength: number;
  totalPayableAmount: number = 0;
  totalSelectedItems: any[] = [];
  buyBtnStatus: any[] = [];

  constructor() {
    sessionStorage.setItem("itemLength", "0");
  }

  setUserDetails(registerForm) {
    let userDetails = sessionStorage.setItem('user', JSON.stringify(registerForm.value));
  }

  getUserDetails() {
    return JSON.parse(sessionStorage.getItem('user'));
  }

  addToCart(item, status) {
    this.selectedItems.push(item);
    this.itemListLength = this.selectedItems.length;
    sessionStorage.setItem("itemLength", this.itemListLength.toString());
    let objBtnStatus = {};
    objBtnStatus["id"] = item.id;
    objBtnStatus["keyStatus"] = status;
    this.buyBtnStatus.push(objBtnStatus);
  }

  removeFromCart(item) {
    this.selectedItems = this.selectedItems.filter(selectedItem => JSON.stringify(selectedItem) !== JSON.stringify(item));
    this.itemListLength = this.selectedItems.length;
    sessionStorage.setItem("itemLength", this.itemListLength.toString());
  }

  cartList() {
    let selectedItemsList = JSON.parse(sessionStorage.getItem('totalSelectedItems'));
    selectedItemsList = this.selectedItems.map(item => {
      let product = Object.assign({}, item);
      product.quantity = 1;
      return product;
    });

    sessionStorage.setItem("totalSelectedItems", JSON.stringify(selectedItemsList));

    let amount = JSON.parse(sessionStorage.getItem('totalSelectedItems'));
    this.totalPayableAmount = 0;
    amount.forEach(item => {
      this.totalPayableAmount += (item.price * item.quantity);
      sessionStorage.setItem("payableAmount", JSON.stringify(this.totalPayableAmount));
    });
  }

  getTotalPrice(cartitem, value) {
    this.totalSelectedItems = JSON.parse(sessionStorage.getItem('totalSelectedItems'));
    this.totalSelectedItems.forEach(item => {
      if (item.id === cartitem.id) {
        this.totalPayableAmount = this.totalPayableAmount - (item.price * item.quantity);
        item.quantity = parseInt(value);
        this.totalPayableAmount += (item.price * item.quantity);
      }
    });
    sessionStorage.setItem("totalSelectedItems", JSON.stringify(this.totalSelectedItems));
    sessionStorage.setItem("payableAmount", JSON.stringify(this.totalPayableAmount));
  }

  getCartSize() {
    //return itemListLength;
    return parseInt(sessionStorage.getItem('itemLength'));
  }

  resetAll() {
    this.totalPayableAmount = 0;
    sessionStorage.setItem("itemLength", "0");
    console.log("ITEMLENGTH:", parseInt(sessionStorage.getItem('itemLength')));
    this.totalSelectedItems = [];
    this.selectedItems = [];
    sessionStorage.clear();
  }
}

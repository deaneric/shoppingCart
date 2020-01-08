import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'shopcart-app';
  showHideHome: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  enterNext() {
    this.showHideHome = true;
    this.router.navigate(['/user-information']);
  }

}

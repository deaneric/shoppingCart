import { Component, OnInit } from '@angular/core';
//import { User } from '../user';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})



export class UserDetailsComponent implements OnInit {

  //user = new User();
  submitted = false;
  registerForm: FormGroup;
  //emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";
  showHideHome: boolean = true;

  constructor(private formBuilder: FormBuilder, private shoppingCartService: ShoppingCartService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
      address: ['', Validators.required]
    });
    //console.log("XXXX:", this.showHideHome);
  }

  // convenience getter for easy access to form fields
  get currentModel() {
    //return JSON.stringify(this.user);
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.shoppingCartService.setUserDetails(this.registerForm);
    this.router.navigate(['/products']);

    //console.log("Obj:", this.registerForm.value);
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))


  }
}

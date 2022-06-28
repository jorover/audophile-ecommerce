import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  formOneDetails:Object ={ 
    formHeader: 'BILLING DETAILS',
    labelOne: 'Name',
    placeHolderOne: 'John Doe',
    labelTwo: 'Email Address',
    placeHolderTwo: 'jdoe@gmail.com',
    labelThree: 'Phone Number',
    placeHolderThree: '+123456789',
  }

  formTwoDetails:Object ={ 
    formHeader: 'SHIPPING INFO',
    labelOne: 'Your Address',
    placeHolderOne: '142 Janet Ford Rd',
    labelTwo: 'ZIP CODE',
    placeHolderTwo: '12321',
    labelThree: 'Country',
    placeHolderThree: 'Canada',
  }

  formThreeDetails:Object ={ 
    formHeader: 'PAYMENT DETAILS',
    labelOne: 'PAYMENTS METHOD',
    placeHolderOne: '142 Janet Ford Rd',
    labelTwo: 'e-Money-Number',
    placeHolderTwo: '237584974',
    labelThree: 'e-Money-PIN',
    placeHolderThree: '8574',
  }

  constructor() { }

  ngOnInit(): void {
  }

}

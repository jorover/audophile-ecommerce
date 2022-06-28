import { Component, OnInit } from '@angular/core';
import { cartItem } from 'src/app/cart';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  orderSummary:cartItem[] = JSON.parse(localStorage.getItem('All Cart') || "");
  grandTotal:any = JSON.parse(localStorage.getItem('Grand Total') || "");

  constructor() { }

  ngOnInit(): void {
    console.log(JSON.parse(this.grandTotal))
  }

}

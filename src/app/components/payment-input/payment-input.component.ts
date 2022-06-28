import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payment-input',
  templateUrl: './payment-input.component.html',
  styleUrls: ['./payment-input.component.css']
})
export class PaymentInputComponent implements OnInit {

  @Input() formDetails:any


  constructor() { }

  ngOnInit(): void {
  }

}

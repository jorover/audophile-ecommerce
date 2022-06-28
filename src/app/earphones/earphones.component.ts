import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-earphones',
  templateUrl: './earphones.component.html',
  styleUrls: ['./earphones.component.css']
})
export class EarphonesComponent implements OnInit {


  link:String = 'zx9-speaker'
  headphoneOne:Object = {
    productTopText: 'NEW PRODUCT',
    productDetails: 'YX1 EARPHONES',
    productText: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    productBtn: 'SEE PRODUCT',
    productContent:'productDisplayContent',
    routerLink: 'yx1-earphones',
    seeProduct: true
  }

  display:boolean = true
  imgOne:String = '../assets/eps.jpeg'
  imgAltOne:String = 'zx9-speaker-logo'

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroSection:String = 'heroSection'
  productContent:String = 'heroContent'
  link:String = 'xx99-mark-headphones'
  products:Object = {
    productTopText: 'NEW PRODUCT',
    productDetails: 'XX99 MARK II HEADPHONES',
    productText: 'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast',
    productBtn: 'SEE PRODUCT',
    productContent:'productContent',
    routerLink:['headphones', this.link],
    seeProduct: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}

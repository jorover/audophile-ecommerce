import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-display',
  templateUrl: './mini-display.component.html',
  styleUrls: ['./mini-display.component.css']
})
export class MiniDisplayComponent implements OnInit {

  miniDisplayContainer:String="miniDisplayContainer"
  miniDisplay:String="miniDisplay"
  link:String = 'zx7-speaker'
  products:Object = {
    productDetails: 'ZX7 SPEAKER',
    productBtn: 'SEE PRODUCT',
    productContent:'miniContent',
    routerLink: ['speakers', this.link],
    seeProduct: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
